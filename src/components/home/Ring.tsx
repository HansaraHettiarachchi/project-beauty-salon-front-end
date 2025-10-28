import { motion } from 'framer-motion';
import React from 'react';

interface RingProps {
    size?: string;
    count: number;
    image?: string;
}

/**
 * RingLayer now computes per-layer CSS variables and uses a CSS keyframe
 * animation (defined in global CSS) to create a repeating inward-ripple glow.
 *
 * Implementation notes:
 * - Outer rings are lighter; inner rings are stronger (intensity grows with depth).
 * - We use a negative animation-delay to permanently offset the phase per layer
 *   so the ripple appears to travel inward repeatedly.
 */
const RingLayer: React.FC<{
    depth: number;
    maxDepth: number;
    size?: string;
    image?: string;
}> = ({ depth, maxDepth, size, image }) => {
    if (depth >= maxDepth) return null;

    // intensity: 0..1 where inner rings have higher intensity
    const intensity = (depth + 1) / Math.max(1, maxDepth);

    // base measures (px) scaled by intensity
    const baseSmallBlur = 6;
    const baseSmallSpread = 5;
    const baseLargeBlur = 20;
    const baseLargeSpread = 12;
    const extraBlur = 36;
    const extraSpread = 12;

    const smallBlur = Math.max(1, Math.round(baseSmallBlur * intensity));
    const smallSpread = Math.max(0, Math.round(baseSmallSpread * intensity));
    const largeBlur = Math.max(1, Math.round(baseLargeBlur * intensity));
    const largeSpread = Math.max(1, Math.round(baseLargeSpread * intensity));

    const alphaSmall = (0.06 + 0.22 * intensity).toFixed(3);
    const alphaLarge = (0.18 + 0.5 * intensity).toFixed(3);

    const smallShadow = `0 0 ${smallBlur}px ${smallSpread}px rgba(237, 213, 206,${alphaSmall})`;
    const largeShadow = `0 0 ${largeBlur}px ${largeSpread}px rgba(237, 213, 206,${alphaLarge}), 0 0 ${Math.round(extraBlur * intensity)}px ${Math.round(extraSpread * intensity)}px rgba(237, 213, 206,${(Number(alphaLarge) / 2).toFixed(3)})`;

    const borderLight = `rgba(237, 213, 206,${(0.25 * intensity).toFixed(3)})`;
    const borderStrong = `rgba(237, 213, 206,${(0.85 * intensity).toFixed(3)})`;

    // animation pulse step (seconds) and total cycle duration
    const pulseStep = 0.7; // how long each ring's phase is
    const totalDuration = Math.max(0.6, pulseStep * Math.max(1, maxDepth));
    // negative delay shifts the animation phase so the ripple appears to travel inward
    const phaseOffset = -(depth * pulseStep);

    return (
        <motion.div
            className={`mx-auto rounded-full relative flex items-center border-0 h-full w-full ${size} ring-pulse`}
            // Leave framer-motion for optional motion props (e.g. subtle scale) while
            // using CSS animation for the continuous box-shadow / border animation.
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            style={{
                willChange: 'box-shadow, border-color',
                // CSS variables consumed by the keyframes defined in global CSS
                ['--small-shadow' as any]: smallShadow,
                ['--large-shadow' as any]: largeShadow,
                ['--border-color1' as any]: borderLight,
                ['--border-color2' as any]: borderStrong,
                ['--total-duration' as any]: `${totalDuration}s`,
                ['--anim-delay' as any]: `${phaseOffset}s`,
            } as React.CSSProperties}
        >
            <RingLayer depth={depth + 1} maxDepth={maxDepth} size={size} image={image} />

            {/* image insertion can be enabled on the innermost layer if needed
            {depth === maxDepth - 1 && (
                <img
                    src={image}
                    alt="ring"
                    className="absolute top-0 left-0 w-[70%] h-[70%] object-cover m-20"
                />
            )} */}
        </motion.div>
    );
};

const Ring: React.FC<RingProps> = ({ size, count, image }) => {
    return (
        <div className='absolute top-10 w-[800px] h-[800px]'>
            <RingLayer depth={0} maxDepth={count} size={size} image={image} />
        </div>
    );
};

export default Ring;
