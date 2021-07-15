window.BENCHMARK_DATA = {
  "lastUpdate": 1626354396980,
  "repoUrl": "https://github.com/steinwurf/fifi",
  "entries": {
    "Fifi Benchmark": [
      {
        "host_name": "linux2",
        "commit": {
          "author": {
            "email": "mikkelhojlundgrontmij@gmail.com",
            "name": "Mikkel Højlund Larsen",
            "username": "loglund"
          },
          "committer": {
            "email": "mikkelhojlundgrontmij@gmail.com",
            "name": "Mikkel Højlund Larsen",
            "username": "loglund"
          },
          "distinct": true,
          "id": "9460139de81f931e1f77d6c766f04cf85ca963a0",
          "message": "working on it",
          "timestamp": "2021-07-15T15:01:25+02:00",
          "tree_id": "27d808e3988c20c69a4b0220baa4414778cdb414",
          "url": "https://github.com/steinwurf/fifi/commit/9460139de81f931e1f77d6c766f04cf85ca963a0"
        },
        "date": 1626354246111,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8326561696050313,
            "unit": "us/iter",
            "extra": "iterations: 839210\ncpu: 0.8326465687968447 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030010742679940684,
            "unit": "us/iter",
            "extra": "iterations: 23313900\ncpu: 0.03001039967572993 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.018272341669062976,
            "unit": "us/iter",
            "extra": "iterations: 38295490\ncpu: 0.018272210800801884 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.02084501740606096,
            "unit": "us/iter",
            "extra": "iterations: 33591497\ncpu: 0.020844868985743628 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8336674916441951,
            "unit": "us/iter",
            "extra": "iterations: 842126\ncpu: 0.8336529034847522 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09836664982477358,
            "unit": "us/iter",
            "extra": "iterations: 7105581\ncpu: 0.09836597626569873 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04260613237977523,
            "unit": "us/iter",
            "extra": "iterations: 16461200\ncpu: 0.042605821386047224 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04486884077619755,
            "unit": "us/iter",
            "extra": "iterations: 15630264\ncpu: 0.04486857630811613 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8608353429273907,
            "unit": "us/iter",
            "extra": "iterations: 810514\ncpu: 0.860825297280491 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.384585258051644,
            "unit": "us/iter",
            "extra": "iterations: 206690\ncpu: 3.384561730127244 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.448444583293277,
            "unit": "us/iter",
            "extra": "iterations: 52091\ncpu: 13.448352191357406 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.676473934837325,
            "unit": "us/iter",
            "extra": "iterations: 13075\ncpu: 53.676117858508626 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.21756219426427,
            "unit": "us/iter",
            "extra": "iterations: 3270\ncpu: 214.21506055045853 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.8172508797994,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.7926146341466 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.0205007413538,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3414.977575609755 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.27450698397915124,
            "unit": "us/iter",
            "extra": "iterations: 2545761\ncpu: 0.2745036002986925 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4549116292861875,
            "unit": "us/iter",
            "extra": "iterations: 1565641\ncpu: 0.4548902839156626 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.054829670540764,
            "unit": "us/iter",
            "extra": "iterations: 649308\ncpu: 1.0548223354709902 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8195285298681085,
            "unit": "us/iter",
            "extra": "iterations: 182493\ncpu: 3.8194226847057093 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.638994141337106,
            "unit": "us/iter",
            "extra": "iterations: 47998\ncpu: 14.63882793033041 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.80359503453371,
            "unit": "us/iter",
            "extra": "iterations: 12096\ncpu: 57.803193204364916 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 233.25589069647566,
            "unit": "us/iter",
            "extra": "iterations: 2999\ncpu: 233.24915405135062 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/2/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/4/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/8/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/16/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/32/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/64/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16324963235082418,
            "unit": "us/iter",
            "extra": "iterations: 4286691\ncpu: 0.16324759773914177 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2518576080509614,
            "unit": "us/iter",
            "extra": "iterations: 2747334\ncpu: 0.25185480651424363 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6620740406002211,
            "unit": "us/iter",
            "extra": "iterations: 1057701\ncpu: 0.6620690819050004 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.1284639171894444,
            "unit": "us/iter",
            "extra": "iterations: 329079\ncpu: 2.1284394294379188 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.209633797271099,
            "unit": "us/iter",
            "extra": "iterations: 85211\ncpu: 8.209401427045814 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.74764545134239,
            "unit": "us/iter",
            "extra": "iterations: 18063\ncpu: 38.74737540829328 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.38919738571914,
            "unit": "us/iter",
            "extra": "iterations: 4324\ncpu: 161.3871579555974 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20653409109240942,
            "unit": "us/iter",
            "extra": "iterations: 3389995\ncpu: 0.20653091140252455 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3028590902177555,
            "unit": "us/iter",
            "extra": "iterations: 2312098\ncpu: 0.30285570897081315 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7341938979775668,
            "unit": "us/iter",
            "extra": "iterations: 949688\ncpu: 0.7341891526480266 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.1783866931361633,
            "unit": "us/iter",
            "extra": "iterations: 322835\ncpu: 2.1783710223488764 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.268091746203405,
            "unit": "us/iter",
            "extra": "iterations: 84454\ncpu: 8.268034788168702 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.79259599607615,
            "unit": "us/iter",
            "extra": "iterations: 18034\ncpu: 38.79231035821217 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.99671779851155,
            "unit": "us/iter",
            "extra": "iterations: 4328\ncpu: 160.99471002772725 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09406080263992822,
            "unit": "us/iter",
            "extra": "iterations: 7439458\ncpu: 0.0940601452417635 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.27452375327246364,
            "unit": "us/iter",
            "extra": "iterations: 2546487\ncpu: 0.27452179649847147 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.076615333586452,
            "unit": "us/iter",
            "extra": "iterations: 650460\ncpu: 1.0766036820096576 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.4636013805004597,
            "unit": "us/iter",
            "extra": "iterations: 201992\ncpu: 3.463576928789285 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 13.674606031530482,
            "unit": "us/iter",
            "extra": "iterations: 51157\ncpu: 13.674240612232975 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.70112486370664,
            "unit": "us/iter",
            "extra": "iterations: 10342\ncpu: 67.70061506478388 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 269.41989040999994,
            "unit": "us/iter",
            "extra": "iterations: 2593\ncpu: 269.41538488237444 us\nthreads: 1"
          }
        ]
      },
      {
        "host_name": "linux2",
        "commit": {
          "author": {
            "email": "mikkelhojlundgrontmij@gmail.com",
            "name": "Mikkel Højlund Larsen",
            "username": "loglund"
          },
          "committer": {
            "email": "mikkelhojlundgrontmij@gmail.com",
            "name": "Mikkel Højlund Larsen",
            "username": "loglund"
          },
          "distinct": true,
          "id": "9460139de81f931e1f77d6c766f04cf85ca963a0",
          "message": "working on it",
          "timestamp": "2021-07-15T15:01:25+02:00",
          "tree_id": "27d808e3988c20c69a4b0220baa4414778cdb414",
          "url": "https://github.com/steinwurf/fifi/commit/9460139de81f931e1f77d6c766f04cf85ca963a0"
        },
        "date": 1626354396128,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8302747208723635,
            "unit": "us/iter",
            "extra": "iterations: 840293\ncpu: 0.8302688740713061 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030006334613710228,
            "unit": "us/iter",
            "extra": "iterations: 23333820\ncpu: 0.030005343445693843 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.018256445893216677,
            "unit": "us/iter",
            "extra": "iterations: 38342977\ncpu: 0.018256238684857456 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.02083946781747092,
            "unit": "us/iter",
            "extra": "iterations: 33595420\ncpu: 0.020839325539016924 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8314745387394193,
            "unit": "us/iter",
            "extra": "iterations: 834568\ncpu: 0.8314685813498714 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09826663713903833,
            "unit": "us/iter",
            "extra": "iterations: 7126179\ncpu: 0.09826590028120258 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.042448924110713444,
            "unit": "us/iter",
            "extra": "iterations: 16488346\ncpu: 0.042447540038279184 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04475673887773293,
            "unit": "us/iter",
            "extra": "iterations: 15637808\ncpu: 0.044756229773379966 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.858343838081751,
            "unit": "us/iter",
            "extra": "iterations: 814228\ncpu: 0.8583335699582927 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3800078491212706,
            "unit": "us/iter",
            "extra": "iterations: 206929\ncpu: 3.3799688830468506 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.438276867755581,
            "unit": "us/iter",
            "extra": "iterations: 52010\ncpu: 13.438133974235726 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.740907933377244,
            "unit": "us/iter",
            "extra": "iterations: 13076\ncpu: 53.74053005506263 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.03333675019496,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.0306328339959 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.6683479653756,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 853.6584346764356 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.2868317394723,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.2293560975613 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2741709561353291,
            "unit": "us/iter",
            "extra": "iterations: 2552563\ncpu: 0.27416774003227357 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44365494026585023,
            "unit": "us/iter",
            "extra": "iterations: 1578214\ncpu: 0.44365178740018846 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0533011526241804,
            "unit": "us/iter",
            "extra": "iterations: 664889\ncpu: 1.0532936685672343 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.811124824293669,
            "unit": "us/iter",
            "extra": "iterations: 183597\ncpu: 3.8110810688627823 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.551368933509444,
            "unit": "us/iter",
            "extra": "iterations: 48106\ncpu: 14.551208248451312 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.807546028966435,
            "unit": "us/iter",
            "extra": "iterations: 12108\ncpu: 57.807132474397285 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.41551306907502,
            "unit": "us/iter",
            "extra": "iterations: 3039\ncpu: 230.41242152023744 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/2/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/4/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/8/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/16/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/32/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/64/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16378272287387113,
            "unit": "us/iter",
            "extra": "iterations: 4273491\ncpu: 0.16378066550274692 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25227946732202144,
            "unit": "us/iter",
            "extra": "iterations: 2750892\ncpu: 0.2522766182750897 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6577875378880744,
            "unit": "us/iter",
            "extra": "iterations: 1060496\ncpu: 0.6577828223774523 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.11993616339654,
            "unit": "us/iter",
            "extra": "iterations: 330422\ncpu: 2.119920544031563 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.137405652379055,
            "unit": "us/iter",
            "extra": "iterations: 86193\ncpu: 8.137344795981086 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.72509582141249,
            "unit": "us/iter",
            "extra": "iterations: 18071\ncpu: 38.723854684300946 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.04518616249558,
            "unit": "us/iter",
            "extra": "iterations: 4286\ncpu: 161.04325081661213 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2046383728625331,
            "unit": "us/iter",
            "extra": "iterations: 3423756\ncpu: 0.2046358245155322 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30204087744532854,
            "unit": "us/iter",
            "extra": "iterations: 2318966\ncpu: 0.3020374326316127 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7225761679791336,
            "unit": "us/iter",
            "extra": "iterations: 971238\ncpu: 0.7225672996732009 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.177297514339985,
            "unit": "us/iter",
            "extra": "iterations: 324104\ncpu: 2.177281591711309 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.220373547741632,
            "unit": "us/iter",
            "extra": "iterations: 85112\ncpu: 8.2203140920199 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.78570614983551,
            "unit": "us/iter",
            "extra": "iterations: 18046\ncpu: 38.785418929402745 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 161.04014230666536,
            "unit": "us/iter",
            "extra": "iterations: 4303\ncpu: 161.03896630258006 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09353908435992256,
            "unit": "us/iter",
            "extra": "iterations: 7470160\ncpu: 0.09353598142476253 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2741461834049686,
            "unit": "us/iter",
            "extra": "iterations: 2552411\ncpu: 0.2741441527246199 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0598536556954277,
            "unit": "us/iter",
            "extra": "iterations: 661271\ncpu: 1.0598460389159599 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.473349815860327,
            "unit": "us/iter",
            "extra": "iterations: 202592\ncpu: 3.4733239318433067 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 13.677814787072556,
            "unit": "us/iter",
            "extra": "iterations: 51218\ncpu: 13.677652212112818 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.06301412719537,
            "unit": "us/iter",
            "extra": "iterations: 10292\ncpu: 68.06253186941301 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.7572105035981,
            "unit": "us/iter",
            "extra": "iterations: 2586\ncpu: 270.7537633410674 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}