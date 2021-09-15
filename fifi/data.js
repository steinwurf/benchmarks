window.BENCHMARK_DATA = {
  "lastUpdate": 1631705020964,
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
          "id": "d7143be5c22724f9af1b0fcf30d3531ce3bcc4e2",
          "message": "10 repetitions",
          "timestamp": "2021-09-15T13:16:32+02:00",
          "tree_id": "5166020af83bf3b5ffc15a8f6ec3a53916c18ca3",
          "url": "https://github.com/steinwurf/fifi/commit/d7143be5c22724f9af1b0fcf30d3531ce3bcc4e2"
        },
        "date": 1631705020110,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.830734578304032,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8307282124362493 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8306368150201817,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8306240611959403 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8344424987944076,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8344199245747674 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8305824076274304,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8305723391687061 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8302922348660895,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8302859003783144 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8302347103831285,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8302283913126673 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8319601615001248,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.831954360959538 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8301536660376758,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.830147204001127 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8303262394865591,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.8303158054252446 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8302528461807123,
            "unit": "us/iter",
            "extra": "iterations: 841363\ncpu: 0.830229179319747 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_mean",
            "value": 0.8309616158200341,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.83095053787723 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_median",
            "value": 0.8304543235569947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8304440722969753 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600_stddev",
            "value": 0.0013312393104923795,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.001328122407514123 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029880727070035622,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.029880343496116436 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.02983628517358569,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.029835936230882026 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.02984472029228074,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.02984449132340252 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.0392070211366122,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.03920659178868498 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.03918297596693451,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.039182671357498915 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029854659504429844,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.02985442864422743 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029838876685955855,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.02983864535914301 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029846763013796046,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.029846533357175364 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.02984762685125277,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.02984730710152987 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.029862078343764042,
            "unit": "us/iter",
            "extra": "iterations: 23459945\ncpu: 0.029861254320928766 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_mean",
            "value": 0.03172017340386473,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.03171982029795893 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_median",
            "value": 0.029851143177841304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02985086787287865 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600_stddev",
            "value": 0.003939603292283864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.003939595698845578 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026051023784785278,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.026050703611678466 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.02604728527529555,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.02604708421562158 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.018287406415510184,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.018287142581062916 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.02598532523887098,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.025985126131532737 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.02599437030566959,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.025994057928692627 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.025989825624702215,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.025989610144371164 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.02598180820506192,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.025981603121909797 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026003619130094417,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.026003420752311338 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.026096665493058,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.026096488616944146 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.025993564134191946,
            "unit": "us/iter",
            "extra": "iterations: 26912501\ncpu: 0.02599337255946594 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_mean",
            "value": 0.02524308936072401,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02524286096635907 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_median",
            "value": 0.025993967219930764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.025993715244079285 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600_stddev",
            "value": 0.002444264992960343,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.002444277461835562 us\nthreads: 1"
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
            "value": 0.03106853902455774,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.031067634652254615 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.03112397487076866,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.0311236244645461 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.043025842021359464,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.04302549959927197 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.020842214460029162,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.020842041805515365 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.020841478585964416,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.02084131250171381 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.027795424508771885,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.02779509233650828 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.027876317331686436,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.027876102806965276 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.027808776890352507,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.027808565714302864 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.027804212338182775,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.02780399763513056 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.031123804233304374,
            "unit": "us/iter",
            "extra": "iterations: 22355567\ncpu: 0.031123570607714816 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_mean",
            "value": 0.028931058426497746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.028930744212392362 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_median",
            "value": 0.027842547111019474,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.027842334260634073 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600_stddev",
            "value": 0.006224065342000451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.006223990053773014 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.831885936099245,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8318623008963225 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.833280828614898,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8332713697476579 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.83344756917176,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8334373739247933 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.832209775752198,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8322031392726639 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8445962171190867,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8445895383744385 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8313868487181616,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8313800406295141 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.837540936413771,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8375355508297148 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8536943532183371,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8536835666914042 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8371691730293389,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8371627904487298 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8320121258063939,
            "unit": "us/iter",
            "extra": "iterations: 840768\ncpu: 0.8320055211425751 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_mean",
            "value": 0.836722376394319,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8367131191957815 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_median",
            "value": 0.8333641988933291,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8333543718362255 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600_stddev",
            "value": 0.007210275705479734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0072108126769329746 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09823992020756785,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09823916131856794 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09829262930587217,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09829188076724021 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09836384515424779,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09836261491317719 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09823650666596338,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09823363689562631 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09826284448206846,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09826208829840549 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09834296231149102,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09834188481682765 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09826200782971442,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09826125858923009 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09827261658156361,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09827187973694687 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09835718540150964,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09835604208931667 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09837739892238317,
            "unit": "us/iter",
            "extra": "iterations: 7124183\ncpu: 0.09837664304805169 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_mean",
            "value": 0.09830079168623816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.098299709047339 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_median",
            "value": 0.09828262294371788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09828188025209353 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600_stddev",
            "value": 0.000054206970396929494,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00005435404843534715 us\nthreads: 1"
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
            "value": 0.04248794313305865,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.04248764023692161 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04243312162178212,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.04243279075907124 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04247395230181275,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.04247362116715527 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04426529902145759,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.0442639307288029 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04429429241761385,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.04429381158595738 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04424730461556798,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.04424697126440761 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.044435646063879196,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.044435311590958836 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.044289031402558576,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.044288681656997175 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.0442887423357973,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.044288391460949546 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04244451085217651,
            "unit": "us/iter",
            "extra": "iterations: 16495745\ncpu: 0.0424440457827152 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_mean",
            "value": 0.04356598437657046,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.04356551962339368 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_median",
            "value": 0.04425630181851278,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.04425545099660526 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600_stddev",
            "value": 0.0009534117814561712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009533247754314952 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04475184364539501,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.044751514313098165 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.044789972062323484,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.04478963362323619 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04479688923207462,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.0447965353184944 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.046663563074387564,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.04666320864591631 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04660872961616163,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.04660790157709382 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04667976421590183,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.04667940286329217 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04665600457763963,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.04665548319456225 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.046641467832378956,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.04664110473749429 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04662664096300068,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.046626274373801076 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04481023494148411,
            "unit": "us/iter",
            "extra": "iterations: 15613845\ncpu: 0.044809722332968066 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_mean",
            "value": 0.04590251101607476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.04590207809799568 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_median",
            "value": 0.04661768528958116,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.04661708797544745 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600_stddev",
            "value": 0.0009601785864484208,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009601374804283907 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8676119530421431,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8676053915266476 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8594635579545524,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8594540562552353 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8595228083435983,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8595161245080455 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8597656762749347,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.85975912336021 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.858350119950503,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8583432447827398 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8607767460325634,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8607674202878632 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8596562683783303,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8596497943607025 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8625566042539997,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8625502017024351 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8618887174428246,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8618820800387781 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8610888371907058,
            "unit": "us/iter",
            "extra": "iterations: 812831\ncpu: 0.8610823332279297 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_mean",
            "value": 0.8610681288864157,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8610609770050589 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_median",
            "value": 0.860271211153749,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8602632718240366 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600_stddev",
            "value": 0.0026211927058480346,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.002621472969969877 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3799310630762833,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.379873737617558 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3810590015913524,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.381033743989767 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3808817541104133,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.3808445169636983 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3807942813276117,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.3807682864425463 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.385413074451053,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.385386902118274 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3792439413482263,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.379217583563409 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3792600547555844,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.379222497924185 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3793003382739797,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.3792746297333007 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.377911132368175,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.37788486975495 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3790298632218967,
            "unit": "us/iter",
            "extra": "iterations: 207148\ncpu: 3.3790029495819685 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_mean",
            "value": 3.380282450452458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.380250971768966 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_median",
            "value": 3.3796157006751315,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.3795741836754294 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600_stddev",
            "value": 0.0020534904094751103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0020544699338816723 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.433032443329013,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.432933625764777 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.439110103441168,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.438911154719337 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.436743256182398,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.436637981453808 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.444628160131675,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.444522047789425 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.497070339801308,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.496703643849472 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.441816382283562,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.441653064758073 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.436206587327211,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.436102139366728 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.447637175251353,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.447474816268493 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.440252244850925,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.440147697102505 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.434165410912184,
            "unit": "us/iter",
            "extra": "iterations: 51978\ncpu: 13.434061122013045 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_mean",
            "value": 13.445066210351078,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.444914729308568 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_median",
            "value": 13.439681174146045,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.43952942591092 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600_stddev",
            "value": 0.018832140220931354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.018754909883297373 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.53559776912771,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.53517324158961 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.58320857406756,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.58169701834891 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.54930501465404,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.54849915902145 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.53556131368748,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.53513035168188 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.60154566050305,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.60112599388342 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.58563286084283,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.58521628440398 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.57624558498371,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.57585328746202 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.53844129346562,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.53803096330256 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.55927557755683,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.558686391436346 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.6049360164444,
            "unit": "us/iter",
            "extra": "iterations: 13080\ncpu: 53.60421154434293 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_mean",
            "value": 53.56697496653332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 53.56636242354731 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_median",
            "value": 53.567760581270264,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 53.56726983944918 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600_stddev",
            "value": 0.026855146367634652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.026771985464369874 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.0352318535446,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.03246560684943 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 213.98632360940604,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 213.98468358300025 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.30134809698689,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.29890431061207 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.0851605379483,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.08263558544485 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 213.97174589133198,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 213.97000580861808 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.28195973194838,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.2803044940369 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.16205800078907,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.1604203607468 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.08508764935794,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.0834796698241 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.31126094527727,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.3095505961463 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.11037999021647,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 214.10379547538886 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_mean",
            "value": 214.1330556306807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 214.13062454906677 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_median",
            "value": 214.0977702640824,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 214.0936375726065 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600_stddev",
            "value": 0.12707072330195518,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12719284897692495 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.2825536030094,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.2719792682877 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.9464415573492,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.9360195121949 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.4419827344941,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.4354902438992 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.9798783092964,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.973541463417 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.4187223853135,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.4120853658549 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.6777845243129,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.6677987804734 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.3031971629073,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.2966487804836 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.9330668565703,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.9267170731634 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 853.5748574791885,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 853.5684597561044 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.2793553049971,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.2668682926754 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_mean",
            "value": 853.8837839917439,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 853.8755608536554 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_median",
            "value": 853.9397542069598,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 853.9313682926793 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600_stddev",
            "value": 0.3425934072081084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34146813014425964 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.822982788086,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.782624390209 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3418.136224514101,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3418.0928682926797 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.070510492092,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.0261365854058 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.492685829721,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.4668048780345 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3432.8565364930687,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3432.817570731711 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3414.923970292254,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3414.881004878073 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3414.2098775724085,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3414.1544341463673 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.051902212748,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.0254292683258 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.1809971507005,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.141287804844 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3414.5808801418398,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3414.539858536614 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_mean",
            "value": 3417.1326567487026,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3417.092801951227 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_median",
            "value": 3415.1257538213963,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3415.083712195125 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600_stddev",
            "value": 5.627074951615158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.627571336455619 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2842686188569251,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.2842650582875247 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28435058146819314,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.28434738819555927 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2849827399061646,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.2849794868064782 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2847715360142446,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.2847694062832229 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2847764770227253,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.2847743642173821 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2848276309928784,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.28482549583405126 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2847494467998603,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.28474724247674993 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28452855465601745,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.28452542967950045 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.28414034640146546,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.28413816995705704 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.27499560541140794,
            "unit": "us/iter",
            "extra": "iterations: 2460904\ncpu: 0.2749935129529624 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_mean",
            "value": 0.28363915375298826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28363655546904887 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_median",
            "value": 0.2846390007279389,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2846363360781252 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600_stddev",
            "value": 0.003049257797444557,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0030490950654241083 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4724322598156096,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.4724287127331915 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44370451495987595,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.44369932600198 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44340491118552455,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.4433997785906685 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44262963621768536,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.44262643072132574 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.442245532933785,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.44224207868723486 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4425207185989131,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.44251747725433577 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4439165669610255,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.443913223850495 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4436691729596844,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.44366591313828324 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44369551881437264,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.44369029444205454 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44455047392809827,
            "unit": "us/iter",
            "extra": "iterations: 1484129\ncpu: 0.4445470198345219 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_mean",
            "value": 0.44627693063745744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4462730255254092 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_median",
            "value": 0.44368234588702854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.44367810379016887 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600_stddev",
            "value": 0.009217418125103837,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.009217526022794019 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0499991076507549,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0499909562990093 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0495861752650348,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0495575094508203 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.055770508085975,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0557625649861475 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0591186568238697,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0591033959989522 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0541538152303678,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0541454729761135 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0534877606549595,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0534790147449264 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.057522699966853,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0575147726778755 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0543558124580144,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0543473359995084 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.053834194838304,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0538257029449363 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0582516775724662,
            "unit": "us/iter",
            "extra": "iterations: 666873\ncpu: 1.0582402226510768 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_mean",
            "value": 1.0546080408546599,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0545966948729366 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_median",
            "value": 1.0542548138441912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0542464044878108 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600_stddev",
            "value": 0.00319815081121079,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.003200272851291626 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8606765912872714,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.860647381171883 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8256296246053645,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.825599369781549 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.838252690203826,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.8381996997907932 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8204154064516533,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.820386552396023 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8188194320331696,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.818763756366888 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8293965452649843,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.8293677617310546 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.820243046477357,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.820213214721322 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.829309707415339,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.829280325815126 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.842294597387323,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.842265475395437 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8207219703754016,
            "unit": "us/iter",
            "extra": "iterations: 181207\ncpu: 3.820693361735516 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_mean",
            "value": 3.8305759611501697,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8305416898905604 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_median",
            "value": 3.8274696660103524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8274398477983373 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600_stddev",
            "value": 0.013229135828417577,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.013230243496575067 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.528078155218996,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.527905845372205 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.536277237043297,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.53611374328619 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.531070919347359,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.530958116491183 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.525685929166144,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.525574670052885 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.54342413645431,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.543314438569015 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.5307731318719,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.530605354094403 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.527924298356677,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.527815458595429 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.537319493207404,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.537208439152534 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.529284194494606,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.529173446021924 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.532197548629512,
            "unit": "us/iter",
            "extra": "iterations: 48038\ncpu: 14.532091948041465 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_mean",
            "value": 14.532203504379021,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.532076145967725 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_median",
            "value": 14.530922025609627,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.530781735292791 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600_stddev",
            "value": 0.005357562049161725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.005360296784021581 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.836352157180166,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.83590847824179 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.838077959358536,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.83741026707802 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.7682920735711,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.76749513270737 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.781245508312196,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.780577252684026 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.78507401199525,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.78462792245656 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.80895752719937,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.80851560030012 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.77890476512774,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.778474831515915 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.79701576959731,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.79637340877129 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.80169725596622,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.80127439886819 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 58.3737312492728,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 58.37329727930766 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_mean",
            "value": 57.856934827758074,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 57.856395457193095 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_median",
            "value": 57.79935651278176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 57.798823903819745 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600_stddev",
            "value": 0.1830725878516975,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1831134973777769 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.0209120700234,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.01910723683756 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.38065747210854,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.37399375000578 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.12451435390273,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.12162697368709 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.13369033211157,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.13085986841654 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 231.2137108100088,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 231.21094144737017 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 229.94358288614373,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 229.9418226973677 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.53813921777825,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.5354713815807 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.73812848643252,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.7351085526371 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 229.97660072226273,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 229.9738421052554 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.72738396494012,
            "unit": "us/iter",
            "extra": "iterations: 3040\ncpu: 230.72461348684288 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_mean",
            "value": 230.37973203157125,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 230.3767387500001 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_median",
            "value": 230.25717390211003,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 230.25242680921116 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600_stddev",
            "value": 0.41860740781136263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4183910840398853 us\nthreads: 1"
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
            "value": 0.16459707113324798,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.164594806233595 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.1645724209568371,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.16457051208996853 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.1677455149153248,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.16774423275796263 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16416731771677595,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.16416530657466397 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16405022937882438,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.1640489785857488 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16475673704863647,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.16475557820221187 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.1661929459633382,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.16619162599392678 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16389196404164103,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.1638907425000289 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.16417157547451963,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.16417034262381447 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600",
            "value": 0.17746059762386962,
            "unit": "us/iter",
            "extra": "iterations: 4255717\ncpu: 0.17745593774209747 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_mean",
            "value": 0.16616063742530154,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16615880633040186 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_median",
            "value": 0.16458474604504253,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16458265916178177 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/1/1600_stddev",
            "value": 0.00414555290918825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.004144623989601337 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25206319433038166,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.25206120068899374 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25071422580971464,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.2507066928604338 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25063513625646516,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.2506332355370329 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25133616895602456,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.25133428296518817 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25122937668358286,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.25122529190959464 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25172417802915553,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.2517223169582794 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25152393183054983,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.2515219869540323 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2518715838559686,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.2518696949451087 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25192827182764904,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.25192641787602915 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2504604552215585,
            "unit": "us/iter",
            "extra": "iterations: 2788449\ncpu: 0.25045858360686607 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_mean",
            "value": 0.25134865228010506,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25134597043015583 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_median",
            "value": 0.25143005039328725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25142813495961025 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600_stddev",
            "value": 0.0005779857439598281,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0005787152024004989 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6549218795824988,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6549005475495006 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6624542886801705,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.662446760503757 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6515686835607194,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6515638411263307 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6678324435142498,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6678273364516636 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.665065878149717,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6650607455889815 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.670685429154517,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6706777494085285 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6711816199883205,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.671176507447067 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6826636813260836,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6826583585128797 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6720337641025393,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6720285594933377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6843427357272396,
            "unit": "us/iter",
            "extra": "iterations: 1067666\ncpu: 0.6843377161022203 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_mean",
            "value": 0.6682750403786055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6682678122184267 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_median",
            "value": 0.6692589363343833,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6692525429300961 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600_stddev",
            "value": 0.010516521558149354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01051882710007346 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.16035219078275,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.16033528176206 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.1661412076020605,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.1660621046132573 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.144089536198985,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.1440724610702278 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.137454284362898,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.137429823989833 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.127642692350205,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.127625169479196 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.4064468020251235,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.406428672927661 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.3506492901803213,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.350624586191609 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.394723784065446,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.394706137860685 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.3226073992266736,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.322588757442352 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.1302405746744344,
            "unit": "us/iter",
            "extra": "iterations: 322311\ncpu: 2.130224249249952 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_mean",
            "value": 2.2340347761468897,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.234009724458683 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_median",
            "value": 2.1632466991924053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.163198693187659 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600_stddev",
            "value": 0.1185748838628945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11857824027709465 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.258588994974883,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 8.258479274641843 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.273932249342291,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 8.273865211385797 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.42524772308884,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 9.425117079678346 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.425610827072218,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 9.425538977367932 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.406346612636234,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 9.406278785875381 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.421858752577307,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 9.421787646246534 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.423981081286357,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 9.423908551054884 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 9.414515044882467,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 9.414414188399558 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.26957500154175,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 8.26951579046796 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.270045066388448,
            "unit": "us/iter",
            "extra": "iterations: 84703\ncpu: 8.269983176511081 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_mean",
            "value": 8.95897013537908,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.958888868162934 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_median",
            "value": 9.41043082875935,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.41034648713747 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600_stddev",
            "value": 0.5947016339727808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5946958149611754 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.75758707562933,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.757065198140324 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.742425300812656,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.74211772193995 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.74948496097534,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.74902706442416 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.76962148697207,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.769167921185954 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.75690090305277,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.75643076156621 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.74651594501907,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.74604947974251 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.75444651652892,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.75415043170194 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.94917437638069,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.948544553907816 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.740472348094755,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.74001544166452 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.96159146089113,
            "unit": "us/iter",
            "extra": "iterations: 18068\ncpu: 38.96131641576151 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_mean",
            "value": 38.79282203743567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 38.79238849900348 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_median",
            "value": 38.75567370979084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 38.75529059663407 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600_stddev",
            "value": 0.08613595596490262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0861271675495132 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.38158594500044,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.38024508908077 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.26373811375882,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.26177364093462 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.05837574240388,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.05648789401494 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.30899298795558,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.30707446322623 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 159.6674193743431,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 159.66563864778595 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.82455002047146,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.82270054819378 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.19495723997963,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.1936916400139 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.51941998422063,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.51769438099768 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 159.7283037899291,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 159.72613590680618 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.16446057385426,
            "unit": "us/iter",
            "extra": "iterations: 4378\ncpu: 160.16275422567728 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_mean",
            "value": 160.2111803771917,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 160.20941964367313 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_median",
            "value": 160.22934767686922,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 160.22773264047427 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600_stddev",
            "value": 0.3443581255998324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.344428610944343 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20990235066958726,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.20989967635887907 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20994976229139914,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.20994821081191134 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2096538335582773,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.2096517076019282 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2162695452701351,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.21626795826729267 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.22005667389519548,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.22005438546637182 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20980086688090535,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.20979920883053407 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2096903591279511,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.20968878815113867 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20966049410333545,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.20965890857183267 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2120649508693324,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.21206330347047272 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20978883492854222,
            "unit": "us/iter",
            "extra": "iterations: 3328996\ncpu: 0.20978622383445109 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_mean",
            "value": 0.2116837671594661,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21168183713648125 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_median",
            "value": 0.2098516087752463,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20984944259470656 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600_stddev",
            "value": 0.0036022287573555085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.003602201420876702 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3169278668564494,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.3169254230785243 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3166991812241548,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.31669674802781356 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.31521218526133327,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.31520761930443153 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3219182835577923,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.32191594306108584 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3221677882122722,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.32216406814137694 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30734496802807265,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.3073413869519395 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3055070690643764,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.30550489677988024 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30513006138283405,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.30512767280118314 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3069560945825905,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.3069537549972139 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3287668788921103,
            "unit": "us/iter",
            "extra": "iterations: 2210228\ncpu: 0.3287643908230189 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_mean",
            "value": 0.31466303770619863,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31466019039664683 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_median",
            "value": 0.31595568324274403,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3159521836661226 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600_stddev",
            "value": 0.008199699308457027,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.008199616830103352 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7306918324439831,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7306836490738504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7301443531288304,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7301231393213579 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7366554464126095,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7366496790689675 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.743540766063708,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7435324320480501 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7127158490894543,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7127106211933925 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7160821538658514,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7160766497351306 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7231971574249344,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7231889937723883 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7138736737894017,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7138682589165761 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7170971686359422,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.717091570460025 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7114196695354515,
            "unit": "us/iter",
            "extra": "iterations: 963291\ncpu: 0.7114146389824 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_mean",
            "value": 0.7235418070390166,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7235339632572139 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_median",
            "value": 0.7201471630304382,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7201402821162066 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600_stddev",
            "value": 0.011163239944528041,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.011161339785609212 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.2369080044698197,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.236891569714786 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.200076990780385,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.200051385323096 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.2311153760348303,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.231053297320383 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.282347939559952,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.2823303078601667 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.433025301939936,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.4329978080430594 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.443721602344574,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.443702695566128 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.440367536227051,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.440348874275811 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.1943973781417574,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.194373106693253 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.2171757498231983,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.21715984424068 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.179571829445895,
            "unit": "us/iter",
            "extra": "iterations: 314331\ncpu: 2.1795545396412868 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_mean",
            "value": 2.28587077087674,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2858463428678646 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_median",
            "value": 2.234011690252325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2339724335175846 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600_stddev",
            "value": 0.10933888845580694,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10934061681129315 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.429350969902833,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.429277283391377 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.448134236597685,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.44806048593677 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.438242723398975,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.438135048405034 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.434590868022395,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.434328722055909 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.436365361127917,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.4362970094111 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.43440441765986,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.434293894776605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.42320453726197,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.423137745058368 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.43956716390527,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.439497532562356 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.495389759516447,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.495123749427226 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 9.429466697714062,
            "unit": "us/iter",
            "extra": "iterations: 74166\ncpu: 9.429392511393477 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_mean",
            "value": 9.440871673510742,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.440754398241822 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_median",
            "value": 9.435478114575156,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.435312865733504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600_stddev",
            "value": 0.02030349779150041,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020253682279187626 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.090821043613026,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.09052152789359 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.09327086874033,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.092821466464336 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.10959416007772,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.10927977885829 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.110326444762514,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.10988725079571 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.101099657734125,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.10080510414803 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.077080720072914,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.07677031328521 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.04629813477762,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.04599179091986 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.10079342959321,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.10049327078796 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.070942842987655,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.07063690176998 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 39.033529752728235,
            "unit": "us/iter",
            "extra": "iterations: 17907\ncpu: 39.033074384318475 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_mean",
            "value": 39.08337570550874,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 39.083028178924145 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_median",
            "value": 39.092045956176676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 39.091671497178965 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600_stddev",
            "value": 0.026327384952267975,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.026338488456547893 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.8424090610104,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.84120245540987 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.56549667842637,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.56350938151243 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.7179255128763,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.71666203381565 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.84870503460724,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.84676279824305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.46454018952258,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.46202061616063 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.97097946919857,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.96896895992498 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.9822459482666,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 160.9809495019784 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 162.99408565165132,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 162.99207505212874 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 162.54259807135128,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 162.54070650915034 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 161.7039081148453,
            "unit": "us/iter",
            "extra": "iterations: 4317\ncpu: 161.70265693768408 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_mean",
            "value": 161.2632893731756,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 161.26155142460084 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_median",
            "value": 160.90984225190292,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 160.90786587908403 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600_stddev",
            "value": 0.8668088934097005,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8667964827901988 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.1020395268807437,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10203835419068268 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.1021430677855122,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10214197712072272 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.0917343210620895,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.09173363345167744 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10208218795869903,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10208141315197895 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10198400141905288,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.1019832172890371 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10201842233769653,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10201762517143517 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10213187229480185,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10213074062002507 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10206734176449617,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10206653571123937 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10203598048306528,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10203519930234747 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.10204533323772703,
            "unit": "us/iter",
            "extra": "iterations: 6857295\ncpu: 0.10204455503226988 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_mean",
            "value": 0.10102820552238842,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10102732510414161 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_median",
            "value": 0.10204243005923537,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10204145461147629 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600_stddev",
            "value": 0.0032659008433150527,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0032658317092908442 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2837230796764953,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.2837208229295398 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.28187492292124794,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28187168189861506 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.28239683021301953,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28238889643080317 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2821990680000245,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28219576010278796 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.28284658753034725,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28284451366837504 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.28244836590905087,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.2824462158493238 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2822109163936915,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.282208617164832 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2824666683057723,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28246325503221115 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2824477879386281,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28244563525732314 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2821146843182984,
            "unit": "us/iter",
            "extra": "iterations: 2475060\ncpu: 0.28211246878864354 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_mean",
            "value": 0.2824728911206576,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2824697867122455 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_median",
            "value": 0.28242230907582383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2824172658440631 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600_stddev",
            "value": 0.0005098108595155708,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0005101135243119389 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2036117743177044,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2036025972955804 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.202407485130719,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2023982966077986 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2027858708297547,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2027476361315292 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2018679275771749,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2018540501032589 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.203204754025228,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2031958060314538 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2048406074419244,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2048313319161559 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2037410390538072,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2037315801844426 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2031916639253695,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2031824935616373 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.2037144497884698,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.2036994305440845 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0347773026047793,
            "unit": "us/iter",
            "extra": "iterations: 582837\ncpu: 1.034769697188098 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_mean",
            "value": 1.1864142874694932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1864012919564042 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_median",
            "value": 1.2031982089752986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2031891497965457 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600_stddev",
            "value": 0.05328601668860163,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.053284160236848246 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.8122870174846804,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.812258465257138 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.8127335039468613,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8126889412711926 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.8212076612479637,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8211801929317577 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.809162910175176,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8091187857934226 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.8019711035270816,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.801941091609919 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.819278943565403,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8192504028484584 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.828112626302622,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8280829758507706 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.8076313577758345,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8076035537745647 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.8076378474046453,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.8076087036994393 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.4491819021160475,
            "unit": "us/iter",
            "extra": "iterations: 183692\ncpu: 3.4491421890991742 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_mean",
            "value": 3.7769204873546314,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.776887530213583 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_median",
            "value": 3.810724963829928,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8106886255252803 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600_stddev",
            "value": 0.1154103752844092,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11541282361011318 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.262005624926793,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.261883655215357 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.32866884268404,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.328470610213856 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.301481296345724,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.301356133673835 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.264188200835992,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.264066859718174 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.398193907424265,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.39808720020597 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.237078603637293,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.236875995422558 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.31222714202112,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.31210714369085 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.318552157921246,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.318422596389645 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.316647971796385,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.316523434763173 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 16.302956762202708,
            "unit": "us/iter",
            "extra": "iterations: 42821\ncpu: 16.30282805165642 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_mean",
            "value": 16.30420005097956,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.304062168094983 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_median",
            "value": 16.307591952111913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.307467597673632 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600_stddev",
            "value": 0.044415310851430224,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.04442744961636742 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.49294103036715,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.49213011811013 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.4329139904713,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.43093100393833 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.43354758315199,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.43276230315348 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.47177434155321,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.47127037401185 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.41573658890611,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.41522076771598 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.42399676015057,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.42344576771605 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.46630667138287,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.46552322834435 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.42373862979919,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.42320305118501 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.4147744666873,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.41426446850119 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.4935042238611,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.4929888779513 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_mean",
            "value": 68.44692342863308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 68.44617399606277 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_median",
            "value": 68.43323078681165,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 68.43184665354589 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600_stddev",
            "value": 0.03113623733794158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.031163722823728778 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.4592539685587,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.45715455949994 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.6522550980864,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.6489853168582 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.50881702711996,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.5010421174573 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.445527396578,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.44338562597164 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.6764838795021,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.6733048686258 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.43005045635806,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.4279663832935 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.43465668856635,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.43250734157573 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 272.51547602634344,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 272.5079876352307 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.57523889556364,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.5732615919672 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.4914975940168,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.4893794435862 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_mean",
            "value": 270.7189257030694,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 270.71549748840664 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_median",
            "value": 270.5001573105684,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 270.49521078052175 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600_stddev",
            "value": 0.63742435416747,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6359699532761487 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}