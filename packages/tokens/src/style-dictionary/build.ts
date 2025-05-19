import StyleDictionary from 'style-dictionary';
import {config} from './config';
import { customJson } from './format';
import { isSizeType, pxToRem } from '../transform';

const sd = new StyleDictionary(config);

sd.registerTransform({
    name: "pxToRem",
    type: "value",
    filter: isSizeType,
    transform: pxToRem
});

sd.registerTransformGroup({
    name: "custom/css",
    transforms: [
        'attribute/cti',
        'name/kebab',
        'time/seconds',
        'html/icon',
        'color/css',
        'size/rem',
        'asset/url',
        'fontFamily/css',
        'cubicBezier/css',
        'strokeStyle/css/shorthand',
        'border/css/shorthand',
        'typography/css/shorthand',
        'transition/css/shorthand',
        'shadow/css/shorthand',
        "pxToRem"
    ]
});

sd.registerFormat({
    name: "custom/json",
    format: customJson
});
await sd.hasInitialized;
await sd.buildAllPlatforms();