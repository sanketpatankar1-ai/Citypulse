import icons from 'lucide-react';

const usedIcons = [
  'Menu', 'Bell', 'CloudSun', 'Wind', 'Clock',
  'MapPin', 'Megaphone', 'AlertTriangle', 'Map', 'Bus', 'Briefcase', 'HeartPulse', 'Link',
  'Send', 'Bot', 'TrafficCone', 'Zap', 'Car', 'Train', 'X', 'Upload'
];

usedIcons.forEach(icon => {
  if (!icons[icon]) {
    console.error(`ERROR: Icon ${icon} does not exist in lucide-react`);
  } else {
    console.log(`OK: ${icon}`);
  }
});
