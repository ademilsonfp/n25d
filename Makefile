SRC = $(shell node tools/get-src)
PURE_FUNCS = $(shell node tools/get-pure-funcs)

UGLIFY_MIN_OPTS = --screw-ie -m -e -c pure_funcs=$(PURE_FUNCS)

all: api

api: play-api/api.js

play: play-api/play.min.js

play-api/api.js: $(SRC)
	@echo "building $@"
	@uglifyjs $(SRC) -o $@ --source-map play-api/api.js.map

play-api/play.min.js: $(SRC) play-api/play.js
	@echo "building $@"
	@uglifyjs $(SRC) play-api/play.js \
		-o $@ --source-map play-api/play.min.js.map \
		$(UGLIFY_MIN_OPTS)
