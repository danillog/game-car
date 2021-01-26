import { createGlobalStyle } from 'styled-components';
import f04b30Woff from '../assets/fonts/04b30/04b30.woff';
import f04b30Woff2 from '../assets/fonts/04b30/04b30.woff2';
import MinecraftWoff from '../assets/fonts/Minecraft/Minecraft.woff';
import MinecraftWoff2 from '../assets/fonts/Minecraft/Minecraft.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: '04b30';
        src: url(${f04b30Woff2}) format('woff2'),
        url(${f04b30Woff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Minecraft';
        src: url(${MinecraftWoff2}) format('woff2'),
        url(${MinecraftWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;