import { localFont } from '@next/font/local';

const jostFont = localFont({
  src: [
    '/public/fonts/Jost-Regular',
  ],
  display: 'swap', 
  fallback: ['sans-serif'],
});

export default jostFont;