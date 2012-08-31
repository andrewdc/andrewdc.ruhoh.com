require 'rack'
require 'ruhoh'
run Ruhoh::Program.preview

# To preview your blog in "production" mode:
# run Ruhoh::Program.preview(:env => 'production')

Encoding.default_external = Encoding::UTF_8

Encoding.default_internal = Encoding::UTF_8