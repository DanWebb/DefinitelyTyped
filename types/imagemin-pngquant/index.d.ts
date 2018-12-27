// Type definitions for imagemin-pngquant 6.0.0
// Project: https://github.com/imagemin/imagemin-pngquant#readme
// Definitions by: Dan Webb <https://github.com/DanWebb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Plugin } from "imagemin";

declare function imageminPngquant(options?: imageminPngquant.Options): Plugin;

declare namespace imageminPngquant {
    interface Options {
        floyd?: number | boolean;
        nofs?: boolean;
        posterize?: number;
        quality?: string;
        speed?: number;
        verbose?: boolean;
        strip?: boolean;
        input?: Buffer | NodeJS.ReadableStream;
    }
}

export = imageminPngquant;
