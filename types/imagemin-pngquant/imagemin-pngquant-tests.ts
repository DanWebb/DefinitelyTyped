import imagemin = require("imagemin");
import imageminPngquant = require("imagemin-pngquant");

imagemin(["*.jpg"], {
    plugins: [imageminPngquant(), imageminPngquant({ verbose: true })]
});
