window.BENCHMARK_DATA = {
  "lastUpdate": 1631701559746,
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
          "id": "770f5b4952f3b9ab65b48669040d61347917433a",
          "message": "working on it",
          "timestamp": "2021-09-15T12:15:28+02:00",
          "tree_id": "951cdefd65630d045bbb7e400dfe8c24b3a26baa",
          "url": "https://github.com/steinwurf/fifi/commit/770f5b4952f3b9ab65b48669040d61347917433a"
        },
        "date": 1631701205315,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8303703675074265,
            "unit": "us/iter",
            "extra": "iterations: 838785\ncpu: 0.8303601351955506 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.83049941372894,
            "unit": "us/iter",
            "extra": "iterations: 838785\ncpu: 0.8304888117932484 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.837272634901721,
            "unit": "us/iter",
            "extra": "iterations: 838785\ncpu: 0.8372630054185518 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8328998439947563,
            "unit": "us/iter",
            "extra": "iterations: 838785\ncpu: 0.8328941039718168 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8305124888967585,
            "unit": "us/iter",
            "extra": "iterations: 838785\ncpu: 0.8305062715713801 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_mean",
            "value": 0.8323109498059205,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8323024655901097 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_median",
            "value": 0.8305124888967585,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.83050627157138 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_stddev",
            "value": 0.002968463390901702,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.002968387263024353 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.02985704025481899,
            "unit": "us/iter",
            "extra": "iterations: 23457172\ncpu: 0.029856529806747394 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029854773683932283,
            "unit": "us/iter",
            "extra": "iterations: 23457172\ncpu: 0.02985455838410528 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029843054597688465,
            "unit": "us/iter",
            "extra": "iterations: 23457172\ncpu: 0.029842739397571053 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029852354653120465,
            "unit": "us/iter",
            "extra": "iterations: 23457172\ncpu: 0.02985214453813958 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030038020349925188,
            "unit": "us/iter",
            "extra": "iterations: 23457172\ncpu: 0.030037817261177106 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_mean",
            "value": 0.029889048707897083,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.029888757877548085 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_median",
            "value": 0.029854773683932283,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.02985455838410528 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_stddev",
            "value": 0.00008344725923375274,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0000834942975120547 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026042714826571646,
            "unit": "us/iter",
            "extra": "iterations: 26915741\ncpu: 0.026028976501148514 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026004510441573845,
            "unit": "us/iter",
            "extra": "iterations: 26915741\ncpu: 0.026001774500653736 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026009958087475457,
            "unit": "us/iter",
            "extra": "iterations: 26915741\ncpu: 0.02600964320469573 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.027106821659352905,
            "unit": "us/iter",
            "extra": "iterations: 26915741\ncpu: 0.02710652978121611 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.027103322764830733,
            "unit": "us/iter",
            "extra": "iterations: 26915741\ncpu: 0.027103128500159106 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_mean",
            "value": 0.02645346555596092,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.026450010497574637 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_median",
            "value": 0.026042714826571646,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.026028976501148514 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_stddev",
            "value": 0.0005950135126173548,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.000597848054026379 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.027809967865013024,
            "unit": "us/iter",
            "extra": "iterations: 25196192\ncpu: 0.027809431044183187 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.027792093231579416,
            "unit": "us/iter",
            "extra": "iterations: 25196192\ncpu: 0.02779178952914789 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.02781451932011179,
            "unit": "us/iter",
            "extra": "iterations: 25196192\ncpu: 0.02781431983848992 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.03069151206676165,
            "unit": "us/iter",
            "extra": "iterations: 25196192\ncpu: 0.0306837397492447 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.030376146379585713,
            "unit": "us/iter",
            "extra": "iterations: 25196192\ncpu: 0.03037590906594139 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_mean",
            "value": 0.02889684777261032,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.028895037845401417 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_median",
            "value": 0.027814519320111787,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.02781431983848992 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_stddev",
            "value": 0.0014985300886082111,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.001496335896220064 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8324295302380981,
            "unit": "us/iter",
            "extra": "iterations: 839708\ncpu: 0.8324234043262655 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8325820008314204,
            "unit": "us/iter",
            "extra": "iterations: 839708\ncpu: 0.832557007912273 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8332869998690731,
            "unit": "us/iter",
            "extra": "iterations: 839708\ncpu: 0.8332806011137183 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8324905752614953,
            "unit": "us/iter",
            "extra": "iterations: 839708\ncpu: 0.8324793428191699 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8355675283710567,
            "unit": "us/iter",
            "extra": "iterations: 839708\ncpu: 0.8355619119979818 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_mean",
            "value": 0.8332713269142287,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8332604536338817 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_median",
            "value": 0.8325820008314204,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.832557007912273 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_stddev",
            "value": 0.0013291117341025444,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0013325481280532206 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09841997725173929,
            "unit": "us/iter",
            "extra": "iterations: 7124364\ncpu: 0.0984193266935824 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09836911008096666,
            "unit": "us/iter",
            "extra": "iterations: 7124364\ncpu: 0.09836793347448279 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09825820626258476,
            "unit": "us/iter",
            "extra": "iterations: 7124364\ncpu: 0.0982567905008784 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09846759829385078,
            "unit": "us/iter",
            "extra": "iterations: 7124364\ncpu: 0.0984669122745557 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09840133711087064,
            "unit": "us/iter",
            "extra": "iterations: 7124364\ncpu: 0.09840024625356004 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_mean",
            "value": 0.09838324580000243,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09838224183941188 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_median",
            "value": 0.09840133711087065,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09840024625356004 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_stddev",
            "value": 0.00007846423190477934,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.00007875800843891575 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.042848103466203,
            "unit": "us/iter",
            "extra": "iterations: 16453246\ncpu: 0.04284783750270305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04268973491989907,
            "unit": "us/iter",
            "extra": "iterations: 16453246\ncpu: 0.04268764643766969 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04245004472643092,
            "unit": "us/iter",
            "extra": "iterations: 16453246\ncpu: 0.04244955925414339 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.05858885596473709,
            "unit": "us/iter",
            "extra": "iterations: 16453246\ncpu: 0.058588463455782586 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.05845116560633468,
            "unit": "us/iter",
            "extra": "iterations: 16453246\ncpu: 0.05845072802047674 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_mean",
            "value": 0.04900558093672095,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.04900484693415509 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_median",
            "value": 0.042848103466203,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.04284783750270305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_stddev",
            "value": 0.008686738811631291,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.008687029972177449 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04482508490930738,
            "unit": "us/iter",
            "extra": "iterations: 15626932\ncpu: 0.044824586169569185 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04513775987072063,
            "unit": "us/iter",
            "extra": "iterations: 15626932\ncpu: 0.04513727870576262 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.044825481588774384,
            "unit": "us/iter",
            "extra": "iterations: 15626932\ncpu: 0.044825178480331275 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.060833115313988904,
            "unit": "us/iter",
            "extra": "iterations: 15626932\ncpu: 0.06083266145907599 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.060841949060581,
            "unit": "us/iter",
            "extra": "iterations: 15626932\ncpu: 0.06084150951703136 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_mean",
            "value": 0.05129267814867446,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.05129224286635409 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_median",
            "value": 0.045137759870720634,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.04513727870576262 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_stddev",
            "value": 0.008714154131596456,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.008714143234258393 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8604837022632241,
            "unit": "us/iter",
            "extra": "iterations: 815576\ncpu: 0.8604740710859539 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8604167583430814,
            "unit": "us/iter",
            "extra": "iterations: 815576\ncpu: 0.8603935672457228 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8599788457126287,
            "unit": "us/iter",
            "extra": "iterations: 815576\ncpu: 0.8599724366582647 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8682299031188564,
            "unit": "us/iter",
            "extra": "iterations: 815576\ncpu: 0.8682208500495379 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8637013954030062,
            "unit": "us/iter",
            "extra": "iterations: 815576\ncpu: 0.8636953196268631 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_mean",
            "value": 0.8625621209681595,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8625512489332685 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_median",
            "value": 0.8604837022632241,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.860474071085954 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_stddev",
            "value": 0.0035006219767706294,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.003502634915083577 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.390513453447724,
            "unit": "us/iter",
            "extra": "iterations: 207051\ncpu: 3.390414825332892 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.379089452968293,
            "unit": "us/iter",
            "extra": "iterations: 207051\ncpu: 3.379051412453917 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3892767458058626,
            "unit": "us/iter",
            "extra": "iterations: 207051\ncpu: 3.389238574071126 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3999303948770945,
            "unit": "us/iter",
            "extra": "iterations: 207051\ncpu: 3.399884472907634 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.393219471099842,
            "unit": "us/iter",
            "extra": "iterations: 207051\ncpu: 3.393175975967303 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_mean",
            "value": 3.3904059036397625,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.390353052146575 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_median",
            "value": 3.390513453447724,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.3904148253328925 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_stddev",
            "value": 0.007549515139314339,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.007546353716864571 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.522385510734624,
            "unit": "us/iter",
            "extra": "iterations: 52031\ncpu: 13.522199150506312 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.801943449125337,
            "unit": "us/iter",
            "extra": "iterations: 52031\ncpu: 13.801562184082663 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.617347872274875,
            "unit": "us/iter",
            "extra": "iterations: 52031\ncpu: 13.61697933924006 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.461941170304328,
            "unit": "us/iter",
            "extra": "iterations: 52031\ncpu: 13.461845976437141 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.488183664250526,
            "unit": "us/iter",
            "extra": "iterations: 52031\ncpu: 13.488088504929694 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_mean",
            "value": 13.57836033333794,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 13.578135031039176 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_median",
            "value": 13.522385510734626,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 13.522199150506314 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_stddev",
            "value": 0.1381374965316466,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.13801169951516082 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.59619002821762,
            "unit": "us/iter",
            "extra": "iterations: 13066\ncpu: 53.59579718352987 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.58181119457825,
            "unit": "us/iter",
            "extra": "iterations: 13066\ncpu: 53.58142239399946 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.59277779231589,
            "unit": "us/iter",
            "extra": "iterations: 13066\ncpu: 53.59097436093673 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.59684692924683,
            "unit": "us/iter",
            "extra": "iterations: 13066\ncpu: 53.596477958059225 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.55555340066066,
            "unit": "us/iter",
            "extra": "iterations: 13066\ncpu: 53.554922317464964 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_mean",
            "value": 53.584635869003854,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 53.58391884279804 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_median",
            "value": 53.59277779231589,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 53.59097436093672 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_stddev",
            "value": 0.017339753834155994,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.017288995266339664 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.18501790675575,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.18243717517691 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 213.96657080141568,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 213.9649675940072 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.0534540011372,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.05025649648272 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.1437629646061,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.14228737389226 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 213.9734223289105,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 213.97189697340394 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_mean",
            "value": 214.06444560056508,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 214.06236912259266 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_median",
            "value": 214.0534540011372,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 214.0502564964827 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_stddev",
            "value": 0.09850691953612581,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09826271847405565 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.9402441227393,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 853.934065934062 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 857.11915851076,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 857.1061636141619 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.2004959050553,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 854.1904761904756 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.806624919067,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 853.7968852258831 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.1218963734833,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 854.1157240537243 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_mean",
            "value": 854.6376839662211,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 854.6286630036614 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_median",
            "value": 854.1218963734833,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 854.1157240537243 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_stddev",
            "value": 1.3957048068579536,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.3935066096825026 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.7566907929213,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.731756097546 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3416.330058400224,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3416.304673170739 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3433.99629360292,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3433.9026146341557 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3416.728973388672,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3416.685165853659 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3416.161420868664,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3416.118795121951 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_mean",
            "value": 3419.7946874106797,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3419.7486009756103 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_median",
            "value": 3416.3300584002245,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3416.304673170739 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_stddev",
            "value": 7.946601750727027,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 7.919783921020013 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.27508885905471253,
            "unit": "us/iter",
            "extra": "iterations: 2544031\ncpu: 0.2750854152327524 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2750197897340958,
            "unit": "us/iter",
            "extra": "iterations: 2544031\ncpu: 0.27501678399359136 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28387837525824045,
            "unit": "us/iter",
            "extra": "iterations: 2544031\ncpu: 0.28387632855102723 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2847206086156114,
            "unit": "us/iter",
            "extra": "iterations: 2544031\ncpu: 0.2847175132692969 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28477740102849297,
            "unit": "us/iter",
            "extra": "iterations: 2544031\ncpu: 0.2847752908671317 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_mean",
            "value": 0.28069700673823067,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2806942663827599 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_median",
            "value": 0.28387837525824045,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2838763285510272 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_stddev",
            "value": 0.005163385726533298,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.005163811903453371 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.46544478117604,
            "unit": "us/iter",
            "extra": "iterations: 1508588\ncpu: 0.46544142602221095 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.46382312367898904,
            "unit": "us/iter",
            "extra": "iterations: 1508588\ncpu: 0.46381955709577405 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4420024190090906,
            "unit": "us/iter",
            "extra": "iterations: 1508588\ncpu: 0.44199618384873784 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4683543138259482,
            "unit": "us/iter",
            "extra": "iterations: 1508588\ncpu: 0.4683491543085389 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44323956303861156,
            "unit": "us/iter",
            "extra": "iterations: 1508588\ncpu: 0.44323462204392505 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_mean",
            "value": 0.4565728401457359,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.4565681886638374 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_median",
            "value": 0.46382312367898904,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.46381955709577405 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_stddev",
            "value": 0.012846736176456264,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.012847520772644639 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0500552228831397,
            "unit": "us/iter",
            "extra": "iterations: 667024\ncpu: 1.0500476819424824 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.050517745433089,
            "unit": "us/iter",
            "extra": "iterations: 667024\ncpu: 1.050510218522877 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0523177945532938,
            "unit": "us/iter",
            "extra": "iterations: 667024\ncpu: 1.0522903058960336 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0541660975716771,
            "unit": "us/iter",
            "extra": "iterations: 667024\ncpu: 1.0541585820000408 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0525229629796238,
            "unit": "us/iter",
            "extra": "iterations: 667024\ncpu: 1.052507256110725 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_mean",
            "value": 1.0519159646841647,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.051902808894432 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_median",
            "value": 1.0523177945532938,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.0522903058960336 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_stddev",
            "value": 0.0016590953340142641,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0016571682637412295 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8667561317147374,
            "unit": "us/iter",
            "extra": "iterations: 182042\ncpu: 3.86670655123537 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8534156298155686,
            "unit": "us/iter",
            "extra": "iterations: 182042\ncpu: 3.8533878500565706 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8140306334370284,
            "unit": "us/iter",
            "extra": "iterations: 182042\ncpu: 3.8139812131266133 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8318869463069745,
            "unit": "us/iter",
            "extra": "iterations: 182042\ncpu: 3.83185873040287 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.825899043824842,
            "unit": "us/iter",
            "extra": "iterations: 182042\ncpu: 3.8258602080837947 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_mean",
            "value": 3.83839767701983,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.8383589105810443 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_median",
            "value": 3.8318869463069745,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.83185873040287 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_stddev",
            "value": 0.02134302648395249,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.021343616095117764 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.570303043580866,
            "unit": "us/iter",
            "extra": "iterations: 48085\ncpu: 14.570198960174848 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.549324588591187,
            "unit": "us/iter",
            "extra": "iterations: 48085\ncpu: 14.549214307996188 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.534003523614087,
            "unit": "us/iter",
            "extra": "iterations: 48085\ncpu: 14.53389437454506 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.539730329455042,
            "unit": "us/iter",
            "extra": "iterations: 48085\ncpu: 14.539624311115773 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.54129714386694,
            "unit": "us/iter",
            "extra": "iterations: 48085\ncpu: 14.541134678173915 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_mean",
            "value": 14.546931725821628,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 14.546813326401159 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_median",
            "value": 14.541297143866938,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 14.541134678173915 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_stddev",
            "value": 0.014165903797726634,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.014172869177694614 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.93999155326314,
            "unit": "us/iter",
            "extra": "iterations: 12097\ncpu: 57.93834520955644 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.863954612023676,
            "unit": "us/iter",
            "extra": "iterations: 12097\ncpu: 57.86328478135084 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.86698978282484,
            "unit": "us/iter",
            "extra": "iterations: 12097\ncpu: 57.86656567744117 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.884648958395225,
            "unit": "us/iter",
            "extra": "iterations: 12097\ncpu: 57.88406745474068 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.87170021023702,
            "unit": "us/iter",
            "extra": "iterations: 12097\ncpu: 57.871272629577504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_mean",
            "value": 57.88545702334877,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 57.88470715053332 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_median",
            "value": 57.87170021023702,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 57.871272629577504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_stddev",
            "value": 0.03149329490471679,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.03100793400890923 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 234.80550989293684,
            "unit": "us/iter",
            "extra": "iterations: 2981\ncpu: 234.79899463266963 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 235.06576284711213,
            "unit": "us/iter",
            "extra": "iterations: 2981\ncpu: 235.06396712512526 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 234.69625803817243,
            "unit": "us/iter",
            "extra": "iterations: 2981\ncpu: 234.69346091915222 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 234.86701404836424,
            "unit": "us/iter",
            "extra": "iterations: 2981\ncpu: 234.86448171754466 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 235.6673678628793,
            "unit": "us/iter",
            "extra": "iterations: 2981\ncpu: 235.66565112378373 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_mean",
            "value": 235.02038253789297,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 235.0173111036551 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_median",
            "value": 234.8670140483642,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 234.86448171754463 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_stddev",
            "value": 0.38581025831029747,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.3867878652381421 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
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
            "name": "BM_vector_dot_product/binary8_neon/2/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/2/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/4/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/4/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/8/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/8/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/16/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/16/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/32/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/32/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/64/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/64/1600",
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
            "value": 0.17537899019579142,
            "unit": "us/iter",
            "extra": "iterations: 3992830\ncpu: 0.17537405298998618 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.17380122852910376,
            "unit": "us/iter",
            "extra": "iterations: 3992830\ncpu: 0.1737990395283543 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.17694086855614224,
            "unit": "us/iter",
            "extra": "iterations: 3992830\ncpu: 0.17693960424060043 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.17389151258617644,
            "unit": "us/iter",
            "extra": "iterations: 3992830\ncpu: 0.17389022848455984 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.17382648656888003,
            "unit": "us/iter",
            "extra": "iterations: 3992830\ncpu: 0.1738251976668188 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_mean",
            "value": 0.1747678172872188,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.17476562458206393 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_median",
            "value": 0.17389151258617647,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.17389022848455984 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_stddev",
            "value": 0.0013860006691203473,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0013857651730873504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.26669924258529654,
            "unit": "us/iter",
            "extra": "iterations: 2638038\ncpu: 0.26669220913421327 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.26675608986583416,
            "unit": "us/iter",
            "extra": "iterations: 2638038\ncpu: 0.26675312031138393 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2663447830713561,
            "unit": "us/iter",
            "extra": "iterations: 2638038\ncpu: 0.26634285290811044 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.254578480526885,
            "unit": "us/iter",
            "extra": "iterations: 2638038\ncpu: 0.25457661527241016 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25515201445739644,
            "unit": "us/iter",
            "extra": "iterations: 2638038\ncpu: 0.2551501081485584 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_mean",
            "value": 0.26190612210135367,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.26190298115493527 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_median",
            "value": 0.2663447830713561,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2663428529081105 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_stddev",
            "value": 0.0064325384492962155,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.006431367400170927 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6311487364176609,
            "unit": "us/iter",
            "extra": "iterations: 1106258\ncpu: 0.6311439673204712 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.636985827581193,
            "unit": "us/iter",
            "extra": "iterations: 1106258\ncpu: 0.6369665945918489 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6438046035124806,
            "unit": "us/iter",
            "extra": "iterations: 1106258\ncpu: 0.6437998224645656 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6865543350519838,
            "unit": "us/iter",
            "extra": "iterations: 1106258\ncpu: 0.6865466012449192 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6819288864272708,
            "unit": "us/iter",
            "extra": "iterations: 1106258\ncpu: 0.6819241198707773 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_mean",
            "value": 0.656084477798118,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.6560762210985165 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_median",
            "value": 0.6438046035124806,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.6437998224645656 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_stddev",
            "value": 0.02614235361072887,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.026144134161910738 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.1261962272551007,
            "unit": "us/iter",
            "extra": "iterations: 327605\ncpu: 2.1261803940721116 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.123446013398704,
            "unit": "us/iter",
            "extra": "iterations: 327605\ncpu: 2.1234080126982176 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.115517042780699,
            "unit": "us/iter",
            "extra": "iterations: 327605\ncpu: 2.11550193983606 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.297510752680319,
            "unit": "us/iter",
            "extra": "iterations: 327605\ncpu: 2.2974823369606554 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.322360925302843,
            "unit": "us/iter",
            "extra": "iterations: 327605\ncpu: 2.322346664428201 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_mean",
            "value": 2.197006192283533,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.196983869599049 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_median",
            "value": 2.1261962272551007,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.126180394072111 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_stddev",
            "value": 0.10353816724097828,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.10353938382651093 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.220953719391126,
            "unit": "us/iter",
            "extra": "iterations: 85118\ncpu: 8.220894569891199 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.219376736143937,
            "unit": "us/iter",
            "extra": "iterations: 85118\ncpu: 8.219142249582934 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.20509145273246,
            "unit": "us/iter",
            "extra": "iterations: 85118\ncpu: 8.204969653892164 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.223230961629072,
            "unit": "us/iter",
            "extra": "iterations: 85118\ncpu: 8.223171655819094 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.212533805286244,
            "unit": "us/iter",
            "extra": "iterations: 85118\ncpu: 8.21243059047441 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_mean",
            "value": 8.216237335036569,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 8.21612174393196 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_median",
            "value": 8.219376736143937,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 8.219142249582934 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_stddev",
            "value": 0.007398610655464241,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.007409424838278851 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 33.80523698194278,
            "unit": "us/iter",
            "extra": "iterations: 20740\ncpu: 33.805006171648934 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 33.779164979175064,
            "unit": "us/iter",
            "extra": "iterations: 20740\ncpu: 33.77891856316329 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 39.28470289695688,
            "unit": "us/iter",
            "extra": "iterations: 20740\ncpu: 39.28353114754069 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 39.35274530629643,
            "unit": "us/iter",
            "extra": "iterations: 20740\ncpu: 39.352473915139846 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 39.3601829543523,
            "unit": "us/iter",
            "extra": "iterations: 20740\ncpu: 39.35972622950822 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_mean",
            "value": 37.11640662374469,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 37.1159312054002 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_median",
            "value": 39.28470289695688,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 39.28353114754069 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_stddev",
            "value": 3.034727246571677,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.034514247183528 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.63177848563475,
            "unit": "us/iter",
            "extra": "iterations: 4352\ncpu: 160.6305824908087 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.59531386459574,
            "unit": "us/iter",
            "extra": "iterations: 4352\ncpu: 161.59290257353024 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.00764932001337,
            "unit": "us/iter",
            "extra": "iterations: 4352\ncpu: 161.00593474264767 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.1554009072921,
            "unit": "us/iter",
            "extra": "iterations: 4352\ncpu: 161.1542366727957 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.23094760319765,
            "unit": "us/iter",
            "extra": "iterations: 4352\ncpu: 161.2291973805152 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_mean",
            "value": 161.12421803614674,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.1225707720595 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_median",
            "value": 161.1554009072921,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.1542366727957 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_stddev",
            "value": 0.3501356265773754,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.3497286085772361 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2138672428711976,
            "unit": "us/iter",
            "extra": "iterations: 3283724\ncpu: 0.21386460555150197 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.21264339349489925,
            "unit": "us/iter",
            "extra": "iterations: 3283724\ncpu: 0.21264096434414223 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.21290390438491813,
            "unit": "us/iter",
            "extra": "iterations: 3283724\ncpu: 0.21290156359060916 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20911255609756957,
            "unit": "us/iter",
            "extra": "iterations: 3283724\ncpu: 0.20911106353640085 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2093379982139321,
            "unit": "us/iter",
            "extra": "iterations: 3283724\ncpu: 0.2093363842393573 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_mean",
            "value": 0.21157301901250336,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.21157091625240235 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_median",
            "value": 0.21264339349489925,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2126409643441422 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_stddev",
            "value": 0.0021925793170751453,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.002192067777225942 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3045863817937536,
            "unit": "us/iter",
            "extra": "iterations: 2296490\ncpu: 0.3045823687453491 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30546188479074615,
            "unit": "us/iter",
            "extra": "iterations: 2296490\ncpu: 0.30545987180436085 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30402814870768347,
            "unit": "us/iter",
            "extra": "iterations: 2296490\ncpu: 0.3040226275751269 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30365263651272056,
            "unit": "us/iter",
            "extra": "iterations: 2296490\ncpu: 0.3036504034417741 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30344821751579437,
            "unit": "us/iter",
            "extra": "iterations: 2296490\ncpu: 0.30344592835152906 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_mean",
            "value": 0.30423545386413964,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.30423223998362803 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_median",
            "value": 0.30402814870768347,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.3040226275751269 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_stddev",
            "value": 0.0008108137564522132,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.00081092958124929 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7004273278249726,
            "unit": "us/iter",
            "extra": "iterations: 1008749\ncpu: 0.7004224162799793 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.703083910214746,
            "unit": "us/iter",
            "extra": "iterations: 1008749\ncpu: 0.7030647762723887 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7069387908888746,
            "unit": "us/iter",
            "extra": "iterations: 1008749\ncpu: 0.7069194447776472 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7082677911360006,
            "unit": "us/iter",
            "extra": "iterations: 1008749\ncpu: 0.7082596185969021 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7086686420019308,
            "unit": "us/iter",
            "extra": "iterations: 1008749\ncpu: 0.708663467324377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_mean",
            "value": 0.705477292413305,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.7054659446502589 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_median",
            "value": 0.7069387908888746,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.7069194447776473 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_stddev",
            "value": 0.003582526824875422,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.003582743920255799 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.2349831847150416,
            "unit": "us/iter",
            "extra": "iterations: 310359\ncpu: 2.2349166094748543 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.257695093475985,
            "unit": "us/iter",
            "extra": "iterations: 310359\ncpu: 2.257679293978906 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.402130234673561,
            "unit": "us/iter",
            "extra": "iterations: 310359\ncpu: 2.4021018659037185 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.209176956032262,
            "unit": "us/iter",
            "extra": "iterations: 310359\ncpu: 2.2091492948488707 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.396301113629149,
            "unit": "us/iter",
            "extra": "iterations: 310359\ncpu: 2.396283416946174 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_mean",
            "value": 2.3000573165052,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.300026096230505 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_median",
            "value": 2.257695093475985,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.257679293978906 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_stddev",
            "value": 0.09215501830632133,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09216293249134073 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.2875241768221,
            "unit": "us/iter",
            "extra": "iterations: 84385\ncpu: 8.28746138531742 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.256244540758422,
            "unit": "us/iter",
            "extra": "iterations: 84385\ncpu: 8.2561302719678 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.282158805231012,
            "unit": "us/iter",
            "extra": "iterations: 84385\ncpu: 8.28209781359251 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.28288209913692,
            "unit": "us/iter",
            "extra": "iterations: 84385\ncpu: 8.282759661077197 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.284447352355173,
            "unit": "us/iter",
            "extra": "iterations: 84385\ncpu: 8.284384784025663 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_mean",
            "value": 8.278651394860725,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 8.278566783196121 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_median",
            "value": 8.28288209913692,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 8.282759661077197 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_stddev",
            "value": 0.012694361740168237,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.012712282615195396 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.84508121706149,
            "unit": "us/iter",
            "extra": "iterations: 18006\ncpu: 38.8448045651456 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.86379083898032,
            "unit": "us/iter",
            "extra": "iterations: 18006\ncpu: 38.8634968343891 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.85792504810273,
            "unit": "us/iter",
            "extra": "iterations: 18006\ncpu: 38.85764761745947 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.84796776878004,
            "unit": "us/iter",
            "extra": "iterations: 18006\ncpu: 38.847675663666934 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.85771319109586,
            "unit": "us/iter",
            "extra": "iterations: 18006\ncpu: 38.85652987892891 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_mean",
            "value": 38.85449561280409,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 38.854030911918 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_median",
            "value": 38.85771319109586,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 38.85652987892891 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_stddev",
            "value": 0.0077420711325211986,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.007655777848138574 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 162.33670112874032,
            "unit": "us/iter",
            "extra": "iterations: 4361\ncpu: 162.33559963311285 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 162.1098727213355,
            "unit": "us/iter",
            "extra": "iterations: 4361\ncpu: 162.10776565007822 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.6269321209847,
            "unit": "us/iter",
            "extra": "iterations: 4361\ncpu: 160.6249027745912 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 161.00333934802305,
            "unit": "us/iter",
            "extra": "iterations: 4361\ncpu: 161.00140999770832 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.42612692927636,
            "unit": "us/iter",
            "extra": "iterations: 4361\ncpu: 160.42425819765813 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_mean",
            "value": 161.30059444967202,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.2987872506298 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_median",
            "value": 161.00333934802305,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.00140999770832 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_stddev",
            "value": 0.8711089690962913,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8713180460284443 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09352974903701473,
            "unit": "us/iter",
            "extra": "iterations: 7482369\ncpu: 0.09352864286698377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09356664760678583,
            "unit": "us/iter",
            "extra": "iterations: 7482369\ncpu: 0.09356564598724992 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09355734330421833,
            "unit": "us/iter",
            "extra": "iterations: 7482369\ncpu: 0.09355665044052457 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09207155452195877,
            "unit": "us/iter",
            "extra": "iterations: 7482369\ncpu: 0.09207091056321805 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.0920767802261405,
            "unit": "us/iter",
            "extra": "iterations: 7482369\ncpu: 0.0920760737675458 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_mean",
            "value": 0.09296041493922365,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09295958472510443 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_median",
            "value": 0.09352974903701473,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09352864286698379 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_stddev",
            "value": 0.0008091455342828441,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.000809005294941811 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2741302681456604,
            "unit": "us/iter",
            "extra": "iterations: 2548528\ncpu: 0.27412820812641514 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.275763115765792,
            "unit": "us/iter",
            "extra": "iterations: 2548528\ncpu: 0.2757557460620422 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.27442794897110206,
            "unit": "us/iter",
            "extra": "iterations: 2548528\ncpu: 0.2744259199820449 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2749279816587154,
            "unit": "us/iter",
            "extra": "iterations: 2548528\ncpu: 0.2749248829128037 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2740888248377815,
            "unit": "us/iter",
            "extra": "iterations: 2548528\ncpu: 0.27408675439311947 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_mean",
            "value": 0.2746676278758103,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.27466430229528505 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_median",
            "value": 0.274427948971102,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2744259199820449 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_stddev",
            "value": 0.0006980494651483177,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0006958693157936645 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0109440055733203,
            "unit": "us/iter",
            "extra": "iterations: 692346\ncpu: 1.0109271476978254 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.011639619514594,
            "unit": "us/iter",
            "extra": "iterations: 692346\ncpu: 1.0116320726919878 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.010583801522542,
            "unit": "us/iter",
            "extra": "iterations: 692346\ncpu: 1.0105729028549497 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.010022144919464,
            "unit": "us/iter",
            "extra": "iterations: 692346\ncpu: 1.0100149145080715 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0098843995845581,
            "unit": "us/iter",
            "extra": "iterations: 692346\ncpu: 1.009876974807411 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_mean",
            "value": 1.0106147942228958,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.010604802512049 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_median",
            "value": 1.0105838015225417,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.0105729028549497 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_stddev",
            "value": 0.0007148980808937056,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0007137767603220253 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.7853044668992557,
            "unit": "us/iter",
            "extra": "iterations: 184771\ncpu: 3.7851899107543305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.7810489047500173,
            "unit": "us/iter",
            "extra": "iterations: 184771\ncpu: 3.7810213886379196 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.782543125783619,
            "unit": "us/iter",
            "extra": "iterations: 184771\ncpu: 3.7825033527988303 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.7891509892664117,
            "unit": "us/iter",
            "extra": "iterations: 184771\ncpu: 3.7891232011517046 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.7916697452746937,
            "unit": "us/iter",
            "extra": "iterations: 184771\ncpu: 3.7916411341606753 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_mean",
            "value": 3.7859434463948,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.785895797500692 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_median",
            "value": 3.785304466899256,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.7851899107543305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_stddev",
            "value": 0.004444261555652612,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.004449490042948831 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 14.760807380168158,
            "unit": "us/iter",
            "extra": "iterations: 47448\ncpu: 14.760660175349972 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 14.73815540422418,
            "unit": "us/iter",
            "extra": "iterations: 47448\ncpu: 14.73797947226442 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 14.729165966565844,
            "unit": "us/iter",
            "extra": "iterations: 47448\ncpu: 14.729057452369021 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 14.856379825255658,
            "unit": "us/iter",
            "extra": "iterations: 47448\ncpu: 14.856232169954458 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 14.726944987558028,
            "unit": "us/iter",
            "extra": "iterations: 47448\ncpu: 14.726835103692144 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_mean",
            "value": 14.762290712754373,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 14.762152874726004 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_median",
            "value": 14.738155404224182,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 14.737979472264419 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_stddev",
            "value": 0.05427716735480369,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.05426819340168376 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.93116681525599,
            "unit": "us/iter",
            "extra": "iterations: 10311\ncpu: 67.93068489962035 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.96975866944283,
            "unit": "us/iter",
            "extra": "iterations: 10311\ncpu: 67.96761167684974 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.30815997922377,
            "unit": "us/iter",
            "extra": "iterations: 10311\ncpu: 68.30768402676654 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.9082521792469,
            "unit": "us/iter",
            "extra": "iterations: 10311\ncpu: 67.90745815148983 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.99988760054256,
            "unit": "us/iter",
            "extra": "iterations: 10311\ncpu: 67.99938764426338 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_mean",
            "value": 68.02344504874242,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 68.02256527979797 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_median",
            "value": 67.96975866944283,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 67.96761167684974 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_stddev",
            "value": 0.1630064737071374,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.16320344388814106 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.7683676355908,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 268.76637874137185 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.7421104858586,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 268.7380176515651 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.65922206196524,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 268.6572501918595 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.62107142977595,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 268.61909823484336 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 269.7310992963298,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 269.7292570990082 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_mean",
            "value": 268.904374181904,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 268.9020003837296 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_median",
            "value": 268.7421104858586,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 268.73801765156503 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_stddev",
            "value": 0.4660101162485392,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.46625463042816256 us\nthreads: 1"
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
          "id": "770f5b4952f3b9ab65b48669040d61347917433a",
          "message": "working on it",
          "timestamp": "2021-09-15T12:15:28+02:00",
          "tree_id": "951cdefd65630d045bbb7e400dfe8c24b3a26baa",
          "url": "https://github.com/steinwurf/fifi/commit/770f5b4952f3b9ab65b48669040d61347917433a"
        },
        "date": 1631701558910,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8307186104493507,
            "unit": "us/iter",
            "extra": "iterations: 838477\ncpu: 0.8307074219090089 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8309688359768361,
            "unit": "us/iter",
            "extra": "iterations: 838477\ncpu: 0.8309597043210488 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8316427388179047,
            "unit": "us/iter",
            "extra": "iterations: 838477\ncpu: 0.8316328891549796 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8310112037081945,
            "unit": "us/iter",
            "extra": "iterations: 838477\ncpu: 0.8310051021077501 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8309640020746006,
            "unit": "us/iter",
            "extra": "iterations: 838477\ncpu: 0.8309578199521274 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_mean",
            "value": 0.8310610782053773,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.831052587488983 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_median",
            "value": 0.830968835976836,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8309597043210488 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_stddev",
            "value": 0.00034497576020426507,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0003448740096897569 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029870441750601204,
            "unit": "us/iter",
            "extra": "iterations: 23431267\ncpu: 0.029870214444656373 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029868803538240115,
            "unit": "us/iter",
            "extra": "iterations: 23431267\ncpu: 0.02986847565690749 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029885155136154824,
            "unit": "us/iter",
            "extra": "iterations: 23431267\ncpu: 0.029884817752279472 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029969172027244907,
            "unit": "us/iter",
            "extra": "iterations: 23431267\ncpu: 0.029968987848587116 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.03015191919497869,
            "unit": "us/iter",
            "extra": "iterations: 23431267\ncpu: 0.03015173413371117 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_mean",
            "value": 0.02994909832944395,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.029948845967228327 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_median",
            "value": 0.029885155136154824,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.029884817752279476 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_stddev",
            "value": 0.00012068771654238691,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.00012073858011748357 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.0259986306798887,
            "unit": "us/iter",
            "extra": "iterations: 26914501\ncpu: 0.025998443478480272 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.0259995165167805,
            "unit": "us/iter",
            "extra": "iterations: 26914501\ncpu: 0.025999143324262317 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026002138593980224,
            "unit": "us/iter",
            "extra": "iterations: 26914501\ncpu: 0.026001862118862934 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.027146028630728958,
            "unit": "us/iter",
            "extra": "iterations: 26914501\ncpu: 0.027145750203579882 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.027137861214586573,
            "unit": "us/iter",
            "extra": "iterations: 26914501\ncpu: 0.027137663521980195 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_mean",
            "value": 0.02645683512719299,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.026456572529433127 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_median",
            "value": 0.026002138593980224,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.026001862118862934 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_stddev",
            "value": 0.0006254248118880927,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0006254470539586764 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.028372490936482975,
            "unit": "us/iter",
            "extra": "iterations: 24643569\ncpu: 0.028371714827507374 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.02836470282120727,
            "unit": "us/iter",
            "extra": "iterations: 24643569\ncpu: 0.02836448949419623 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.02837047860359186,
            "unit": "us/iter",
            "extra": "iterations: 24643569\ncpu: 0.028370102723351488 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.03042856304394611,
            "unit": "us/iter",
            "extra": "iterations: 24643569\ncpu: 0.03042832659506425 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.030321909400717093,
            "unit": "us/iter",
            "extra": "iterations: 24643569\ncpu: 0.030321679339546954 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_mean",
            "value": 0.029171628961189057,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.029171262595933257 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_median",
            "value": 0.028372490936482968,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.02837171482750737 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_stddev",
            "value": 0.0010993886541338154,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0010995095719244976 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8330657037353053,
            "unit": "us/iter",
            "extra": "iterations: 831887\ncpu: 0.8330548199454973 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8330155487847618,
            "unit": "us/iter",
            "extra": "iterations: 831887\ncpu: 0.833006625899913 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8337056809042402,
            "unit": "us/iter",
            "extra": "iterations: 831887\ncpu: 0.8336993449831552 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.833102101899414,
            "unit": "us/iter",
            "extra": "iterations: 831887\ncpu: 0.8330930535036619 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8329883218116096,
            "unit": "us/iter",
            "extra": "iterations: 831887\ncpu: 0.8329819638965387 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_mean",
            "value": 0.8331754714270663,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8331671616457534 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_median",
            "value": 0.8330657037353054,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8330548199454973 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_stddev",
            "value": 0.0002996474402341049,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.000300583478648607 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09834262996475783,
            "unit": "us/iter",
            "extra": "iterations: 7124498\ncpu: 0.09833992500243563 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09833279136809378,
            "unit": "us/iter",
            "extra": "iterations: 7124498\ncpu: 0.09833206830853161 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09911382200599295,
            "unit": "us/iter",
            "extra": "iterations: 7124498\ncpu: 0.09911290886740369 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09840370288622687,
            "unit": "us/iter",
            "extra": "iterations: 7124498\ncpu: 0.09840298895445014 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09831318110399467,
            "unit": "us/iter",
            "extra": "iterations: 7124498\ncpu: 0.09831205581080917 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_mean",
            "value": 0.09850122546581322,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09849998938872605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_median",
            "value": 0.09834262996475782,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09833992500243563 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_stddev",
            "value": 0.00034411787036139896,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0003443168955422845 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04246954550446287,
            "unit": "us/iter",
            "extra": "iterations: 16477926\ncpu: 0.04246923720861476 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.042739970510826425,
            "unit": "us/iter",
            "extra": "iterations: 16477926\ncpu: 0.04273968143806445 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04259396415773843,
            "unit": "us/iter",
            "extra": "iterations: 16477926\ncpu: 0.042593448896420506 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.059906112951960334,
            "unit": "us/iter",
            "extra": "iterations: 16477926\ncpu: 0.05990548907672012 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.059832668471901405,
            "unit": "us/iter",
            "extra": "iterations: 16477926\ncpu: 0.05983222961433367 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_mean",
            "value": 0.0495084523193779,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0495080172468307 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_median",
            "value": 0.04273997051082643,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.04273968143806445 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_stddev",
            "value": 0.009458719356678049,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.009458631388601568 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04500672307495737,
            "unit": "us/iter",
            "extra": "iterations: 15555140\ncpu: 0.04500610467022472 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04503170660348463,
            "unit": "us/iter",
            "extra": "iterations: 15555140\ncpu: 0.045031366609365006 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04496526267945661,
            "unit": "us/iter",
            "extra": "iterations: 15555140\ncpu: 0.04496474843685104 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.06183696136759673,
            "unit": "us/iter",
            "extra": "iterations: 15555140\ncpu: 0.06183633287774971 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.061755236107408164,
            "unit": "us/iter",
            "extra": "iterations: 15555140\ncpu: 0.06175478002769498 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_mean",
            "value": 0.051719177966580696,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.05171866652437709 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_median",
            "value": 0.045031706603484635,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.045031366609365006 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_stddev",
            "value": 0.009199004016276716,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.009198975799264323 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8621104920055553,
            "unit": "us/iter",
            "extra": "iterations: 814706\ncpu: 0.8621051704541277 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8593912467354681,
            "unit": "us/iter",
            "extra": "iterations: 814706\ncpu: 0.8593804292591395 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8601767024290662,
            "unit": "us/iter",
            "extra": "iterations: 814706\ncpu: 0.860170584235292 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8603080994508343,
            "unit": "us/iter",
            "extra": "iterations: 814706\ncpu: 0.8602975527368089 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8657664897626798,
            "unit": "us/iter",
            "extra": "iterations: 814706\ncpu: 0.8657610671825219 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_mean",
            "value": 0.8615506060767208,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.8615429607735781 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_median",
            "value": 0.8603080994508344,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.860297552736809 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_stddev",
            "value": 0.00255838885918569,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.002560249133064689 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.38655533717834,
            "unit": "us/iter",
            "extra": "iterations: 207043\ncpu: 3.3865053781098364 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.385575375475624,
            "unit": "us/iter",
            "extra": "iterations: 207043\ncpu: 3.3855503156349225 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.384035764668889,
            "unit": "us/iter",
            "extra": "iterations: 207043\ncpu: 3.383995686886283 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3858321692003073,
            "unit": "us/iter",
            "extra": "iterations: 207043\ncpu: 3.385792806325249 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3813952803159775,
            "unit": "us/iter",
            "extra": "iterations: 207043\ncpu: 3.3813008698676112 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_mean",
            "value": 3.3846787853678277,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.3846290113647806 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_median",
            "value": 3.385575375475624,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.385550315634922 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_stddev",
            "value": 0.002052467771657078,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0020737404693174466 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.484272526538605,
            "unit": "us/iter",
            "extra": "iterations: 52093\ncpu: 13.484109515673872 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.445804629559191,
            "unit": "us/iter",
            "extra": "iterations: 52093\ncpu: 13.445646766360182 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.456193936655357,
            "unit": "us/iter",
            "extra": "iterations: 52093\ncpu: 13.456100090223211 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.454335761024941,
            "unit": "us/iter",
            "extra": "iterations: 52093\ncpu: 13.454177509454237 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.451942101284283,
            "unit": "us/iter",
            "extra": "iterations: 52093\ncpu: 13.451845660645374 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_mean",
            "value": 13.458509791012478,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 13.458375908471377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_median",
            "value": 13.454335761024941,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 13.454177509454237 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_stddev",
            "value": 0.014925313443025983,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.014913916640307034 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.66868772196724,
            "unit": "us/iter",
            "extra": "iterations: 13075\ncpu: 53.66829560229436 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.57510729000172,
            "unit": "us/iter",
            "extra": "iterations: 13075\ncpu: 53.574353652007794 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.61476774197464,
            "unit": "us/iter",
            "extra": "iterations: 13075\ncpu: 53.61436741873779 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.579775370785654,
            "unit": "us/iter",
            "extra": "iterations: 13075\ncpu: 53.57914003824093 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.59669716362743,
            "unit": "us/iter",
            "extra": "iterations: 13075\ncpu: 53.59611349904414 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_mean",
            "value": 53.60700705767134,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 53.60645404206501 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_median",
            "value": 53.59669716362744,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 53.596113499044144 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_stddev",
            "value": 0.03784899744434482,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.03798162968294978 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.3721958068269,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.36937083460663 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.10498623452906,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.10345123815446 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.04536336760606,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.04292693366074 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.39355216380545,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.39196973402642 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.27357754405577,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.27114338122746 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_mean",
            "value": 214.23793502336466,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 214.23577242433515 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_median",
            "value": 214.2735775440558,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 214.27114338122752 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_stddev",
            "value": 0.1567420370469777,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.1566808212361047 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 855.6999811312047,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 855.6889817073159 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.1938735217583,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.1838402439009 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 855.3106610367938,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 855.3042743902478 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 855.0422947581221,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 855.0361878048788 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.2089927487257,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.2026134146349 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_mean",
            "value": 854.891160639321,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 854.8831795121957 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_median",
            "value": 855.0422947581222,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 855.0361878048786 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_stddev",
            "value": 0.6716723621925356,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.6712479491907901 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3422.976703178592,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3422.931448780518 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3424.616557795827,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3424.57417560975 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3427.0588944597944,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3427.0356292683164 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3429.049980349657,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3429.0060829268286 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3419.317850252477,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3419.2766975609898 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_mean",
            "value": 3424.60399720727,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3424.5648068292808 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_median",
            "value": 3424.6165577958272,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3424.57417560975 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_stddev",
            "value": 3.754493303710764,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.757058118228946 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2752655936572497,
            "unit": "us/iter",
            "extra": "iterations: 2544265\ncpu: 0.2752623433486702 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.27563789646956305,
            "unit": "us/iter",
            "extra": "iterations: 2544265\ncpu: 0.2756358775520642 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28426045958937574,
            "unit": "us/iter",
            "extra": "iterations: 2544265\ncpu: 0.2842571426325459 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28534166518929316,
            "unit": "us/iter",
            "extra": "iterations: 2544265\ncpu: 0.28533970321487706 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.284829737108833,
            "unit": "us/iter",
            "extra": "iterations: 2544265\ncpu: 0.28482759578896094 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_mean",
            "value": 0.28106707040286294,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.28106453250742375 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_median",
            "value": 0.28426045958937574,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2842571426325459 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_stddev",
            "value": 0.0051419990726571186,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.005142134355208931 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4668862523280149,
            "unit": "us/iter",
            "extra": "iterations: 1501493\ncpu: 0.4668825981872736 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4653082204363502,
            "unit": "us/iter",
            "extra": "iterations: 1501493\ncpu: 0.4653048119438425 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4409217684450063,
            "unit": "us/iter",
            "extra": "iterations: 1501493\ncpu: 0.44091656304758087 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4706579359185474,
            "unit": "us/iter",
            "extra": "iterations: 1501493\ncpu: 0.47065449988777824 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44446209839636036,
            "unit": "us/iter",
            "extra": "iterations: 1501493\ncpu: 0.44445896784067584 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_mean",
            "value": 0.4576472551048559,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.45764348818143025 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_median",
            "value": 0.4653082204363502,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.46530481194384254 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_stddev",
            "value": 0.013846638005051379,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.013847067037504088 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0535839174572719,
            "unit": "us/iter",
            "extra": "iterations: 665563\ncpu: 1.053564929240364 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0569017594641723,
            "unit": "us/iter",
            "extra": "iterations: 665563\ncpu: 1.056893960451522 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0531010356795456,
            "unit": "us/iter",
            "extra": "iterations: 665563\ncpu: 1.053088627222352 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.054972381678687,
            "unit": "us/iter",
            "extra": "iterations: 665563\ncpu: 1.0549646374573076 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0523029195068643,
            "unit": "us/iter",
            "extra": "iterations: 665563\ncpu: 1.052295078001631 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_mean",
            "value": 1.0541724027573083,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.0541614464746354 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_median",
            "value": 1.053583917457272,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.053564929240364 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_stddev",
            "value": 0.001808207972977996,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.001809824136795019 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8475602787619536,
            "unit": "us/iter",
            "extra": "iterations: 182425\ncpu: 3.847495875017103 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8445882965836504,
            "unit": "us/iter",
            "extra": "iterations: 182425\ncpu: 3.8445616883650726 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8358906090741485,
            "unit": "us/iter",
            "extra": "iterations: 182425\ncpu: 3.8358463478141682 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.812262435898448,
            "unit": "us/iter",
            "extra": "iterations: 182425\ncpu: 3.812234386734257 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.813702684078083,
            "unit": "us/iter",
            "extra": "iterations: 182425\ncpu: 3.8136745128134963 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_mean",
            "value": 3.8308008608792568,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.83076256214882 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_median",
            "value": 3.8358906090741485,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.8358463478141687 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_stddev",
            "value": 0.016829274036994166,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.01681932842635263 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.623493626393559,
            "unit": "us/iter",
            "extra": "iterations: 47934\ncpu: 14.623090979263102 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.615401102752756,
            "unit": "us/iter",
            "extra": "iterations: 47934\ncpu: 14.615181645596008 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.633257378026562,
            "unit": "us/iter",
            "extra": "iterations: 47934\ncpu: 14.633147536195377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.633406594811579,
            "unit": "us/iter",
            "extra": "iterations: 47934\ncpu: 14.63331806233581 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.566462971159726,
            "unit": "us/iter",
            "extra": "iterations: 47934\ncpu: 14.566358805857925 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_mean",
            "value": 14.614404334628839,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 14.614219405849648 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_median",
            "value": 14.623493626393559,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 14.623090979263102 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_stddev",
            "value": 0.027832113826227235,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.02780872412312018 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.90964751885245,
            "unit": "us/iter",
            "extra": "iterations: 12128\ncpu: 57.90924365105544 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.804376122819406,
            "unit": "us/iter",
            "extra": "iterations: 12128\ncpu: 57.80326698548743 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.88591968038151,
            "unit": "us/iter",
            "extra": "iterations: 12128\ncpu: 57.88549909300773 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.78668345121721,
            "unit": "us/iter",
            "extra": "iterations: 12128\ncpu: 57.7859717183376 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.88190934148501,
            "unit": "us/iter",
            "extra": "iterations: 12128\ncpu: 57.88146231860076 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_mean",
            "value": 57.85370722295113,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 57.8530887532978 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_median",
            "value": 57.88190934148501,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 57.881462318600754 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_stddev",
            "value": 0.054516194896820525,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.05476259398638376 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 231.1014385254708,
            "unit": "us/iter",
            "extra": "iterations: 3045\ncpu: 231.09979310344715 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.11292142821063,
            "unit": "us/iter",
            "extra": "iterations: 3045\ncpu: 230.10910541871849 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.60925488401517,
            "unit": "us/iter",
            "extra": "iterations: 3045\ncpu: 230.60646568144526 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.78018025615924,
            "unit": "us/iter",
            "extra": "iterations: 3045\ncpu: 230.77848505747377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.9051444769297,
            "unit": "us/iter",
            "extra": "iterations: 3045\ncpu: 230.90246075533665 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_mean",
            "value": 230.70178791415714,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 230.69926200328428 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_median",
            "value": 230.7801802561592,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 230.77848505747374 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_stddev",
            "value": 0.3750153203349619,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.37579487055550487 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_neon/1/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
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
            "name": "BM_vector_dot_product/binary8_neon/2/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/2/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/4/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/4/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/8/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/8/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/16/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/16/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/32/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/32/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/64/1600",
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
            "name": "BM_vector_dot_product/binary8_neon/64/1600",
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
            "value": 0.16533325271512617,
            "unit": "us/iter",
            "extra": "iterations: 4238012\ncpu: 0.16533110123331457 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.1653577245858781,
            "unit": "us/iter",
            "extra": "iterations: 4238012\ncpu: 0.16535581494342227 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.1666918072134909,
            "unit": "us/iter",
            "extra": "iterations: 4238012\ncpu: 0.1666872401493918 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16677591168883377,
            "unit": "us/iter",
            "extra": "iterations: 4238012\ncpu: 0.16677482980227548 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16587292778667417,
            "unit": "us/iter",
            "extra": "iterations: 4238012\ncpu: 0.16587177360517247 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_mean",
            "value": 0.16600632479800065,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.16600415194671533 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_median",
            "value": 0.16587292778667417,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.1658717736051725 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_stddev",
            "value": 0.0006988657151096578,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0006984654622195984 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2751336137558438,
            "unit": "us/iter",
            "extra": "iterations: 2543417\ncpu: 0.27513156513462067 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2747870589097692,
            "unit": "us/iter",
            "extra": "iterations: 2543417\ncpu: 0.27478500812096657 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2748273668848333,
            "unit": "us/iter",
            "extra": "iterations: 2543417\ncpu: 0.2748229468467063 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2573173012985467,
            "unit": "us/iter",
            "extra": "iterations: 2543417\ncpu: 0.25731546891445445 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2574984997073815,
            "unit": "us/iter",
            "extra": "iterations: 2543417\ncpu: 0.257496765571668 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_mean",
            "value": 0.26791276811127485,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.26791035091768317 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_median",
            "value": 0.27478705890976923,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2747850081209666 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_stddev",
            "value": 0.009590738571301898,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.009590165709316744 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6631011223475646,
            "unit": "us/iter",
            "extra": "iterations: 1055134\ncpu: 0.6630914073473175 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6590966508218267,
            "unit": "us/iter",
            "extra": "iterations: 1055134\ncpu: 0.6590917769686085 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6431180818414054,
            "unit": "us/iter",
            "extra": "iterations: 1055134\ncpu: 0.6431100030896537 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.645640478616138,
            "unit": "us/iter",
            "extra": "iterations: 1055134\ncpu: 0.645633279754041 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6451890095884648,
            "unit": "us/iter",
            "extra": "iterations: 1055134\ncpu: 0.6451843566788623 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_mean",
            "value": 0.65122906864308,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.6512221647676966 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_median",
            "value": 0.6456404786161379,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.645633279754041 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_stddev",
            "value": 0.009169886412476343,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.009169346281371954 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.20218742998988,
            "unit": "us/iter",
            "extra": "iterations: 318479\ncpu: 2.202156540933623 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.1446143427709905,
            "unit": "us/iter",
            "extra": "iterations: 318479\ncpu: 2.144598359703479 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.458968818968333,
            "unit": "us/iter",
            "extra": "iterations: 318479\ncpu: 2.458950395473493 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.3234595318288007,
            "unit": "us/iter",
            "extra": "iterations: 318479\ncpu: 2.323424451847679 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.436853944062172,
            "unit": "us/iter",
            "extra": "iterations: 318479\ncpu: 2.4368360017458044 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_mean",
            "value": 2.3132168135240354,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.3131931499408154 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_median",
            "value": 2.3234595318288007,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.323424451847679 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_stddev",
            "value": 0.1390944081990832,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.13909595680809755 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.395890097365298,
            "unit": "us/iter",
            "extra": "iterations: 74278\ncpu: 9.395820714073997 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.43451379162644,
            "unit": "us/iter",
            "extra": "iterations: 74278\ncpu: 9.434381997361184 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.412106078700567,
            "unit": "us/iter",
            "extra": "iterations: 74278\ncpu: 9.412036807668667 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.426973938072097,
            "unit": "us/iter",
            "extra": "iterations: 74278\ncpu: 9.426874835079163 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.401927757874333,
            "unit": "us/iter",
            "extra": "iterations: 74278\ncpu: 9.40182871105845 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_mean",
            "value": 9.414282332727746,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 9.414188613048292 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_median",
            "value": 9.412106078700566,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 9.412036807668667 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_stddev",
            "value": 0.016325093402591716,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.016305598391481404 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.95957081181059,
            "unit": "us/iter",
            "extra": "iterations: 17963\ncpu: 38.95927951901124 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.976254670516305,
            "unit": "us/iter",
            "extra": "iterations: 17963\ncpu: 38.975979179424755 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 39.18901700548251,
            "unit": "us/iter",
            "extra": "iterations: 17963\ncpu: 39.18857451427905 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 39.013577670262094,
            "unit": "us/iter",
            "extra": "iterations: 17963\ncpu: 39.013044535990865 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.93297220174994,
            "unit": "us/iter",
            "extra": "iterations: 17963\ncpu: 38.93250843400384 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_mean",
            "value": 39.01427847196429,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 39.01387723654195 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_median",
            "value": 38.9762546705163,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 38.975979179424755 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_stddev",
            "value": 0.10196015563723408,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.10192875914010727 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.0427922596132,
            "unit": "us/iter",
            "extra": "iterations: 4325\ncpu: 161.04157965317643 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.8250458116476,
            "unit": "us/iter",
            "extra": "iterations: 4325\ncpu: 160.82307283237094 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.71670373464596,
            "unit": "us/iter",
            "extra": "iterations: 4325\ncpu: 161.7147091329476 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 163.7315474493655,
            "unit": "us/iter",
            "extra": "iterations: 4325\ncpu: 163.7303095953755 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 162.1826811332923,
            "unit": "us/iter",
            "extra": "iterations: 4325\ncpu: 162.17980439306353 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_mean",
            "value": 161.8997540777129,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.89789512138685 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_median",
            "value": 161.71670373464596,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.7147091329476 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_stddev",
            "value": 1.1574112836566033,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.157507222691839 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20791898543010945,
            "unit": "us/iter",
            "extra": "iterations: 3368532\ncpu: 0.20791637069203878 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20802437414670238,
            "unit": "us/iter",
            "extra": "iterations: 3368532\ncpu: 0.20802208261640562 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.21074636156290857,
            "unit": "us/iter",
            "extra": "iterations: 3368532\ncpu: 0.21074481198337955 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2075419500417343,
            "unit": "us/iter",
            "extra": "iterations: 3368532\ncpu: 0.20754037099840736 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20769468936370045,
            "unit": "us/iter",
            "extra": "iterations: 3368532\ncpu: 0.20769312507644566 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_mean",
            "value": 0.20838527210903104,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.20838335227333543 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_median",
            "value": 0.20791898543010942,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.20791637069203875 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_stddev",
            "value": 0.001333277039169127,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0013334270262790773 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3018070550293304,
            "unit": "us/iter",
            "extra": "iterations: 2330277\ncpu: 0.30180481934122066 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3003537953964376,
            "unit": "us/iter",
            "extra": "iterations: 2330277\ncpu: 0.3003501472142605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30040556598037477,
            "unit": "us/iter",
            "extra": "iterations: 2330277\ncpu: 0.3004033567683128 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.2987121767812753,
            "unit": "us/iter",
            "extra": "iterations: 2330277\ncpu: 0.2987100949801229 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.2984302010316095,
            "unit": "us/iter",
            "extra": "iterations: 2330277\ncpu: 0.2984280049110067 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_mean",
            "value": 0.2999417588438056,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.29993928464298475 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_median",
            "value": 0.3003537953964376,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.3003501472142605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_stddev",
            "value": 0.001383916553518918,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.001383768798955756 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7506844084595452,
            "unit": "us/iter",
            "extra": "iterations: 934006\ncpu: 0.7506762515444202 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7558193092387769,
            "unit": "us/iter",
            "extra": "iterations: 934006\ncpu: 0.7558136575139858 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7338111694255429,
            "unit": "us/iter",
            "extra": "iterations: 934006\ncpu: 0.7338029306021641 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7661697743807676,
            "unit": "us/iter",
            "extra": "iterations: 934006\ncpu: 0.7661642612574169 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7756781219213124,
            "unit": "us/iter",
            "extra": "iterations: 934006\ncpu: 0.775672117738002 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_mean",
            "value": 0.756432556685189,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.7564258437311979 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_median",
            "value": 0.7558193092387768,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.7558136575139858 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_stddev",
            "value": 0.015892998707871836,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.015894060366861605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.1932954034497323,
            "unit": "us/iter",
            "extra": "iterations: 319477\ncpu: 2.1932699568357163 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.2444452809420747,
            "unit": "us/iter",
            "extra": "iterations: 319477\ncpu: 2.244414602616154 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.1918565799334613,
            "unit": "us/iter",
            "extra": "iterations: 319477\ncpu: 2.191832563846541 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.250431174834197,
            "unit": "us/iter",
            "extra": "iterations: 319477\ncpu: 2.250413876429282 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.3685848544971333,
            "unit": "us/iter",
            "extra": "iterations: 319477\ncpu: 2.3685667293733195 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_mean",
            "value": 2.2497226587313195,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.2496995458202025 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_median",
            "value": 2.2444452809420747,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 2.2444146026161538 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_stddev",
            "value": 0.0719185172742753,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.07192137084072472 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.480212914953352,
            "unit": "us/iter",
            "extra": "iterations: 74060\ncpu: 9.480106670267329 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.435185090677177,
            "unit": "us/iter",
            "extra": "iterations: 74060\ncpu: 9.435064056170754 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.46360795909316,
            "unit": "us/iter",
            "extra": "iterations: 74060\ncpu: 9.463537213070408 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.454500665543629,
            "unit": "us/iter",
            "extra": "iterations: 74060\ncpu: 9.454398325681957 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.467152367081153,
            "unit": "us/iter",
            "extra": "iterations: 74060\ncpu: 9.467082203618824 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_mean",
            "value": 9.460131799469696,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 9.460037693761853 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_median",
            "value": 9.46360795909316,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 9.463537213070408 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_stddev",
            "value": 0.016723271235186517,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.016734101554621527 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.822547021662984,
            "unit": "us/iter",
            "extra": "iterations: 18043\ncpu: 38.822080696114504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.77687974851689,
            "unit": "us/iter",
            "extra": "iterations: 18043\ncpu: 38.77638086792678 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.784702383268765,
            "unit": "us/iter",
            "extra": "iterations: 18043\ncpu: 38.78442276783242 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.819309613699794,
            "unit": "us/iter",
            "extra": "iterations: 18043\ncpu: 38.81887119658606 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.78069856852245,
            "unit": "us/iter",
            "extra": "iterations: 18043\ncpu: 38.780405364961865 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_mean",
            "value": 38.79682746713418,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 38.79643217868433 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_median",
            "value": 38.784702383268765,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 38.784422767832424 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_stddev",
            "value": 0.022203675972503903,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.022161316185109897 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 163.07765100327555,
            "unit": "us/iter",
            "extra": "iterations: 4354\ncpu: 163.0764113458866 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 161.70315749063698,
            "unit": "us/iter",
            "extra": "iterations: 4354\ncpu: 161.7012528709247 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.6234290701674,
            "unit": "us/iter",
            "extra": "iterations: 4354\ncpu: 160.6215567294422 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.4382905272316,
            "unit": "us/iter",
            "extra": "iterations: 4354\ncpu: 160.4364653192442 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.53148952163465,
            "unit": "us/iter",
            "extra": "iterations: 4354\ncpu: 160.5303125861279 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_mean",
            "value": 161.27480352258925,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 161.2731997703251 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_median",
            "value": 160.62342907016736,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 160.6215567294422 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_stddev",
            "value": 1.1302991344350644,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.1304253630801155 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09363538301450158,
            "unit": "us/iter",
            "extra": "iterations: 7485032\ncpu: 0.09363465633814226 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09370004402270785,
            "unit": "us/iter",
            "extra": "iterations: 7485032\ncpu: 0.09369873996530605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09280116045050053,
            "unit": "us/iter",
            "extra": "iterations: 7485032\ncpu: 0.09280045763331435 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09187845104866843,
            "unit": "us/iter",
            "extra": "iterations: 7485032\ncpu: 0.09187777460403886 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09179254428062297,
            "unit": "us/iter",
            "extra": "iterations: 7485032\ncpu: 0.09179183161808861 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_mean",
            "value": 0.09276151656340029,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09276069203177803 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_median",
            "value": 0.09280116045050053,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.09280045763331435 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_stddev",
            "value": 0.0009171641063778702,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.0009170008891591058 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2777651998622206,
            "unit": "us/iter",
            "extra": "iterations: 2522970\ncpu: 0.2777630312687018 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2775887699057873,
            "unit": "us/iter",
            "extra": "iterations: 2522970\ncpu: 0.2775808895864776 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2778182138984065,
            "unit": "us/iter",
            "extra": "iterations: 2522970\ncpu: 0.27781522570620415 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.27791734353113207,
            "unit": "us/iter",
            "extra": "iterations: 2522970\ncpu: 0.27791426731193986 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.27796648310121524,
            "unit": "us/iter",
            "extra": "iterations: 2522970\ncpu: 0.27796446529288743 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_mean",
            "value": 0.27781120205975235,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.2778075758332422 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_median",
            "value": 0.27781821389840655,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.27781522570620415 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_stddev",
            "value": 0.0001474954617157687,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.00014952154307381786 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.058703964412111,
            "unit": "us/iter",
            "extra": "iterations: 660342\ncpu: 1.0586964027731085 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0685220835405458,
            "unit": "us/iter",
            "extra": "iterations: 660342\ncpu: 1.0684914574569122 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0571485473119273,
            "unit": "us/iter",
            "extra": "iterations: 660342\ncpu: 1.0571366186006708 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.056041197208338,
            "unit": "us/iter",
            "extra": "iterations: 660342\ncpu: 1.0560294423192775 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.057122912536135,
            "unit": "us/iter",
            "extra": "iterations: 660342\ncpu: 1.0571152236265458 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_mean",
            "value": 1.0595077410018114,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.059493828955303 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_median",
            "value": 1.0571485473119275,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 1.0571366186006708 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_stddev",
            "value": 0.005127732338971509,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.00511882276257318 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.970105117981709,
            "unit": "us/iter",
            "extra": "iterations: 176608\ncpu: 3.9700750702118355 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.9626275376362914,
            "unit": "us/iter",
            "extra": "iterations: 176608\ncpu: 3.962600057755023 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.9843218355512335,
            "unit": "us/iter",
            "extra": "iterations: 176608\ncpu: 3.984263974451939 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.9740025316768204,
            "unit": "us/iter",
            "extra": "iterations: 176608\ncpu: 3.9739722605998384 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.972894192001141,
            "unit": "us/iter",
            "extra": "iterations: 176608\ncpu: 3.9728631828683305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_mean",
            "value": 3.972790242969439,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.972754909177394 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_median",
            "value": 3.972894192001141,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 3.9728631828683305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_stddev",
            "value": 0.007825416165856827,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.007814326513841879 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.332883519851254,
            "unit": "us/iter",
            "extra": "iterations: 43023\ncpu: 16.332764219138962 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.28410033988168,
            "unit": "us/iter",
            "extra": "iterations: 43023\ncpu: 16.28397924366028 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.287580498579953,
            "unit": "us/iter",
            "extra": "iterations: 43023\ncpu: 16.28736422378716 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.331841688903364,
            "unit": "us/iter",
            "extra": "iterations: 43023\ncpu: 16.331656857959434 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.306616079994868,
            "unit": "us/iter",
            "extra": "iterations: 43023\ncpu: 16.30642990958333 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_mean",
            "value": 16.308604425442226,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 16.308438890825833 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_median",
            "value": 16.306616079994868,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 16.30642990958333 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_stddev",
            "value": 0.023323025456058834,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.023330492554888865 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.61822711538386,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 67.61771093749879 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.61261618431703,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 67.61211824845714 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.68709899466715,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 67.68523987268321 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.61199530260062,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 67.61090162036942 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.57448944780562,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 67.57398794367246 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_mean",
            "value": 67.62088540895485,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 67.6199917245362 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_median",
            "value": 67.61261618431703,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 67.61211824845712 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_stddev",
            "value": 0.04090019784560177,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.04038406957039341 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.25094424528754,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 268.24346369573954 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.40940146459053,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 268.4073511333037 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.53204552045565,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 268.52874452555176 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.1450618490365,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 268.1431452170522 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 268.2358312735043,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 268.23260468689773 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_mean",
            "value": 268.3146568705749,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 268.311061851709 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_median",
            "value": 268.25094424528754,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 268.24346369573954 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_stddev",
            "value": 0.15432887599053066,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 0.15457878719290058 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}