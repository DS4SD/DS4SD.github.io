import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
});

site.copy("fonts");
site.copy("icons");
site.copy("images");
site.copy("movies");
site.copy("styles");

site.data("layout", "layout.njk", "/");

export default site;
