# npm shrinkwrap

sed -i '' '/"from": "/ d' npm-shrinkwrap.json

sed -i '' 's/http.:\/\/registry\.npm\.taobao\.org/http:\/\/r\.npm\.sankuai\.com/g' npm-shrinkwrap.json

sed -i '' 's/http.:\/\/registry\.npmjs\.org/http:\/\/r\.npm\.sankuai\.com/g' npm-shrinkwrap.json

sed -i '' 's/http.:\/\/r\.cnpmjs\.org/http:\/\/r\.npm\.sankuai\.com/g' npm-shrinkwrap.json

# sed -i '' 's/http.:\/\/r\.npm\.sankuai\.com/http:\/\/registry\.npmjs\.org/g' npm-shrinkwrap.json
