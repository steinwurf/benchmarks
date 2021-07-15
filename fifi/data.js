window.BENCHMARK_DATA = {
  "lastUpdate": 1626354247061,
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
      }
    ]
  }
}