window.BENCHMARK_DATA = {
  "lastUpdate": 1626340602093,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a8e905b6585c6f320f5bc98a5c129003396d703",
          "message": "Update benchmark.yml",
          "timestamp": "2021-07-14T16:11:42+02:00",
          "tree_id": "bb230364069113bf4ec6277d7a769c44d91ec186",
          "url": "https://github.com/steinwurf/fifi/commit/5a8e905b6585c6f320f5bc98a5c129003396d703"
        },
        "date": 1626272429594,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8327062191373413,
            "unit": "us/iter",
            "extra": "iterations: 842283\ncpu: 0.8326617502668344 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030315028960961405,
            "unit": "us/iter",
            "extra": "iterations: 23116238\ncpu: 0.030313759012171454 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.018287533840787372,
            "unit": "us/iter",
            "extra": "iterations: 38325525\ncpu: 0.01828679432310451 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.022497338913389432,
            "unit": "us/iter",
            "extra": "iterations: 31251863\ncpu: 0.022496458755114856 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8332133966497219,
            "unit": "us/iter",
            "extra": "iterations: 842712\ncpu: 0.8331753006958492 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09828029553331935,
            "unit": "us/iter",
            "extra": "iterations: 7118891\ncpu: 0.09827656554932492 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04246721582164593,
            "unit": "us/iter",
            "extra": "iterations: 16424131\ncpu: 0.042465563748852214 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04508694559431606,
            "unit": "us/iter",
            "extra": "iterations: 15544908\ncpu: 0.04508505614828988 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8604775423247812,
            "unit": "us/iter",
            "extra": "iterations: 814156\ncpu: 0.8604408393477426 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.384240389109782,
            "unit": "us/iter",
            "extra": "iterations: 207024\ncpu: 3.384087168637448 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.438732068391051,
            "unit": "us/iter",
            "extra": "iterations: 52072\ncpu: 13.438160009218004 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.60783733721716,
            "unit": "us/iter",
            "extra": "iterations: 13068\ncpu: 53.60547030915206 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.62156273392412,
            "unit": "us/iter",
            "extra": "iterations: 3238\ncpu: 214.61318529956773 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.6636509225773,
            "unit": "us/iter",
            "extra": "iterations: 819\ncpu: 854.6221355311346 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3419.791198358303,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3419.612517073173 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.27477304354841453,
            "unit": "us/iter",
            "extra": "iterations: 2549749\ncpu: 0.27475913119291373 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44188181049618497,
            "unit": "us/iter",
            "extra": "iterations: 1584385\ncpu: 0.44186575548240997 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0525649534485004,
            "unit": "us/iter",
            "extra": "iterations: 665909\ncpu: 1.0525000488054683 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.8195338602934648,
            "unit": "us/iter",
            "extra": "iterations: 182982\ncpu: 3.819412182619064 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.598316503902689,
            "unit": "us/iter",
            "extra": "iterations: 48003\ncpu: 14.597658854654922 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.813770775962816,
            "unit": "us/iter",
            "extra": "iterations: 12075\ncpu: 57.809743188405584 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.2696186631418,
            "unit": "us/iter",
            "extra": "iterations: 3041\ncpu: 230.25392305162708 us\nthreads: 1"
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
            "value": 0.16417297492514732,
            "unit": "us/iter",
            "extra": "iterations: 4268048\ncpu: 0.16416555624491533 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25389799923836287,
            "unit": "us/iter",
            "extra": "iterations: 2744812\ncpu: 0.25388517319219067 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6669403679826004,
            "unit": "us/iter",
            "extra": "iterations: 1055128\ncpu: 0.6669125584763164 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.1306464169379744,
            "unit": "us/iter",
            "extra": "iterations: 329322\ncpu: 2.1305650184318123 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.14592047093063,
            "unit": "us/iter",
            "extra": "iterations: 85897\ncpu: 8.145568308555614 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.80642661490586,
            "unit": "us/iter",
            "extra": "iterations: 18056\ncpu: 38.80357543198926 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 160.90282143211894,
            "unit": "us/iter",
            "extra": "iterations: 4316\ncpu: 160.8928744207602 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20612624464237647,
            "unit": "us/iter",
            "extra": "iterations: 3397939\ncpu: 0.20611689144507886 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.302899897700398,
            "unit": "us/iter",
            "extra": "iterations: 2312062\ncpu: 0.3028858153457822 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7350312396459644,
            "unit": "us/iter",
            "extra": "iterations: 973989\ncpu: 0.7349775007725953 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.1829971894658633,
            "unit": "us/iter",
            "extra": "iterations: 322067\ncpu: 2.1828684528374427 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.275441957484247,
            "unit": "us/iter",
            "extra": "iterations: 84718\ncpu: 8.274720106706926 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.825246975896945,
            "unit": "us/iter",
            "extra": "iterations: 18058\ncpu: 38.82261036659636 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 167.74606216331213,
            "unit": "us/iter",
            "extra": "iterations: 4296\ncpu: 167.73779702048418 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09529184825823825,
            "unit": "us/iter",
            "extra": "iterations: 7351594\ncpu: 0.09528795673428117 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2773892091693626,
            "unit": "us/iter",
            "extra": "iterations: 2523923\ncpu: 0.2773777064514255 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0609922162265075,
            "unit": "us/iter",
            "extra": "iterations: 659825\ncpu: 1.0609526768461366 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.4636586600306343,
            "unit": "us/iter",
            "extra": "iterations: 202588\ncpu: 3.4635268624005415 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 13.741739503115516,
            "unit": "us/iter",
            "extra": "iterations: 50933\ncpu: 13.74119739657986 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.0329974003066,
            "unit": "us/iter",
            "extra": "iterations: 10297\ncpu: 68.0299468777314 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.6084919454324,
            "unit": "us/iter",
            "extra": "iterations: 2591\ncpu: 270.59553029718154 us\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a8e905b6585c6f320f5bc98a5c129003396d703",
          "message": "Update benchmark.yml",
          "timestamp": "2021-07-14T16:11:42+02:00",
          "tree_id": "bb230364069113bf4ec6277d7a769c44d91ec186",
          "url": "https://github.com/steinwurf/fifi/commit/5a8e905b6585c6f320f5bc98a5c129003396d703"
        },
        "date": 1626272870734,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8306586875337238,
            "unit": "us/iter",
            "extra": "iterations: 834328\ncpu: 0.8306526234286756 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030065430431245335,
            "unit": "us/iter",
            "extra": "iterations: 23269907\ncpu: 0.030065258791107337 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.01827155549609338,
            "unit": "us/iter",
            "extra": "iterations: 38250776\ncpu: 0.018271430624047996 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.020855461476892666,
            "unit": "us/iter",
            "extra": "iterations: 33465637\ncpu: 0.02085471165542136 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8335021768610975,
            "unit": "us/iter",
            "extra": "iterations: 839795\ncpu: 0.8334917604891666 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09835575013286041,
            "unit": "us/iter",
            "extra": "iterations: 7097271\ncpu: 0.09835216324697202 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04255689231234515,
            "unit": "us/iter",
            "extra": "iterations: 16469557\ncpu: 0.04255648485262839 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04480288088502845,
            "unit": "us/iter",
            "extra": "iterations: 15626705\ncpu: 0.04480213531899396 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8666342756759972,
            "unit": "us/iter",
            "extra": "iterations: 812532\ncpu: 0.8666234142163012 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3817744697123575,
            "unit": "us/iter",
            "extra": "iterations: 206998\ncpu: 3.3815870781360218 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.447195817162635,
            "unit": "us/iter",
            "extra": "iterations: 51991\ncpu: 13.44704750822258 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.614915857697234,
            "unit": "us/iter",
            "extra": "iterations: 13076\ncpu: 53.612824258183004 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.20859415596777,
            "unit": "us/iter",
            "extra": "iterations: 3270\ncpu: 214.20615321100914 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.4852093952458,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.4790499999995 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3415.6182917152964,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3415.5767024390216 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2746060223108846,
            "unit": "us/iter",
            "extra": "iterations: 2549915\ncpu: 0.27459522062500114 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4436613639690733,
            "unit": "us/iter",
            "extra": "iterations: 1576378\ncpu: 0.443649954515986 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.054828245904988,
            "unit": "us/iter",
            "extra": "iterations: 664548\ncpu: 1.0547994200569433 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.821433545716578,
            "unit": "us/iter",
            "extra": "iterations: 182452\ncpu: 3.8213907329050993 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.572885641713968,
            "unit": "us/iter",
            "extra": "iterations: 47948\ncpu: 14.5725577083507 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.85739268948828,
            "unit": "us/iter",
            "extra": "iterations: 12085\ncpu: 57.856724286305244 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 229.5434924865262,
            "unit": "us/iter",
            "extra": "iterations: 3047\ncpu: 229.54189235313382 us\nthreads: 1"
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
            "value": 0.16375709418011222,
            "unit": "us/iter",
            "extra": "iterations: 4271478\ncpu: 0.16375138184019714 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25386080546191303,
            "unit": "us/iter",
            "extra": "iterations: 2735397\ncpu: 0.2538578147888586 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6655774097100334,
            "unit": "us/iter",
            "extra": "iterations: 1060960\ncpu: 0.6655347374076287 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.127175390430619,
            "unit": "us/iter",
            "extra": "iterations: 328316\ncpu: 2.127159727214019 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.241271242394873,
            "unit": "us/iter",
            "extra": "iterations: 85147\ncpu: 8.240997416233117 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.82236619456114,
            "unit": "us/iter",
            "extra": "iterations: 18009\ncpu: 38.8218482980732 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 164.3224603989545,
            "unit": "us/iter",
            "extra": "iterations: 4250\ncpu: 164.3168614117644 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.2047857654066702,
            "unit": "us/iter",
            "extra": "iterations: 3404996\ncpu: 0.20478332514928055 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30230345420716864,
            "unit": "us/iter",
            "extra": "iterations: 2312118\ncpu: 0.30229425012045164 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7243823799917791,
            "unit": "us/iter",
            "extra": "iterations: 960138\ncpu: 0.7243772947222179 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.1855138898267334,
            "unit": "us/iter",
            "extra": "iterations: 321829\ncpu: 2.1854984945421365 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.246071563041538,
            "unit": "us/iter",
            "extra": "iterations: 84386\ncpu: 8.24578648116984 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.95476868537062,
            "unit": "us/iter",
            "extra": "iterations: 17929\ncpu: 38.95447994868652 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 160.87638422431252,
            "unit": "us/iter",
            "extra": "iterations: 4339\ncpu: 160.86817792117975 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09356490482697798,
            "unit": "us/iter",
            "extra": "iterations: 7465479\ncpu: 0.09356387245881985 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.275215464755752,
            "unit": "us/iter",
            "extra": "iterations: 2540241\ncpu: 0.275207003981118 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0648206586653557,
            "unit": "us/iter",
            "extra": "iterations: 656609\ncpu: 1.064807791242582 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.467236999251157,
            "unit": "us/iter",
            "extra": "iterations: 202856\ncpu: 3.4671382557085115 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 13.731477923476696,
            "unit": "us/iter",
            "extra": "iterations: 50972\ncpu: 13.731298654162973 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.00788610278778,
            "unit": "us/iter",
            "extra": "iterations: 10291\ncpu: 68.00713506947837 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.62336326891534,
            "unit": "us/iter",
            "extra": "iterations: 2583\ncpu: 270.6213534649629 us\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7ff505b65078b433e16cdf541f3340dccb81ced",
          "message": "Update benchmark.yml",
          "timestamp": "2021-07-14T16:31:51+02:00",
          "tree_id": "11d4dcbae10fe1281d751445da3ffb22c69196e6",
          "url": "https://github.com/steinwurf/fifi/commit/e7ff505b65078b433e16cdf541f3340dccb81ced"
        },
        "date": 1626273299383,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8309375786243458,
            "unit": "us/iter",
            "extra": "iterations: 831723\ncpu: 0.83089425325499 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030121083519232806,
            "unit": "us/iter",
            "extra": "iterations: 23304649\ncpu: 0.030120881932184436 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.01827183801423643,
            "unit": "us/iter",
            "extra": "iterations: 37852795\ncpu: 0.018270895583800358 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.020865854507262555,
            "unit": "us/iter",
            "extra": "iterations: 33489977\ncpu: 0.020865714061254804 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8325816075173844,
            "unit": "us/iter",
            "extra": "iterations: 834659\ncpu: 0.8325426970774893 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09831912590217937,
            "unit": "us/iter",
            "extra": "iterations: 7100327\ncpu: 0.09831843885499925 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.04245436907980126,
            "unit": "us/iter",
            "extra": "iterations: 16465402\ncpu: 0.04245223560287197 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.0447587354970112,
            "unit": "us/iter",
            "extra": "iterations: 15607515\ncpu: 0.044758407664512896 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8617282206654842,
            "unit": "us/iter",
            "extra": "iterations: 814000\ncpu: 0.8617217567567562 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.380161684421743,
            "unit": "us/iter",
            "extra": "iterations: 206757\ncpu: 3.3801211518836087 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.44286571635968,
            "unit": "us/iter",
            "extra": "iterations: 51976\ncpu: 13.44277212559644 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.59802065247114,
            "unit": "us/iter",
            "extra": "iterations: 13078\ncpu: 53.59470400672884 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.1676389613112,
            "unit": "us/iter",
            "extra": "iterations: 3269\ncpu: 214.16482899969424 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.7640428310488,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.7201024390257 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3416.8615573790016,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3416.8183512195105 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2749450066353384,
            "unit": "us/iter",
            "extra": "iterations: 2546113\ncpu: 0.2749316141899434 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.4434516717761831,
            "unit": "us/iter",
            "extra": "iterations: 1575525\ncpu: 0.4434461928563488 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0541618859833222,
            "unit": "us/iter",
            "extra": "iterations: 663149\ncpu: 1.0541096254386255 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.813520574311353,
            "unit": "us/iter",
            "extra": "iterations: 182356\ncpu: 3.8134935620434685 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.602320922846468,
            "unit": "us/iter",
            "extra": "iterations: 47929\ncpu: 14.601502576728134 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.81253244801355,
            "unit": "us/iter",
            "extra": "iterations: 12062\ncpu: 57.811814956060566 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 230.0263391988366,
            "unit": "us/iter",
            "extra": "iterations: 3041\ncpu: 230.01446267675126 us\nthreads: 1"
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
            "value": 0.1635602157567982,
            "unit": "us/iter",
            "extra": "iterations: 4261588\ncpu: 0.1635581245770353 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.25340260870059883,
            "unit": "us/iter",
            "extra": "iterations: 2733041\ncpu: 0.2533898649892195 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6581558582893781,
            "unit": "us/iter",
            "extra": "iterations: 1053566\ncpu: 0.6581373155549812 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.136558198088393,
            "unit": "us/iter",
            "extra": "iterations: 327427\ncpu: 2.1365428507728526 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.189276800938158,
            "unit": "us/iter",
            "extra": "iterations: 85652\ncpu: 8.18888397235324 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.76052776224783,
            "unit": "us/iter",
            "extra": "iterations: 18070\ncpu: 38.7602537908135 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 161.11195967206217,
            "unit": "us/iter",
            "extra": "iterations: 4336\ncpu: 161.10290498154941 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20504933133401576,
            "unit": "us/iter",
            "extra": "iterations: 3415700\ncpu: 0.20504782943466862 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.30184996269758196,
            "unit": "us/iter",
            "extra": "iterations: 2321905\ncpu: 0.3018347602507426 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7258694379892241,
            "unit": "us/iter",
            "extra": "iterations: 964843\ncpu: 0.7258641706474517 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.189267997529361,
            "unit": "us/iter",
            "extra": "iterations: 321936\ncpu: 2.1891640729834596 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.227022973869543,
            "unit": "us/iter",
            "extra": "iterations: 84773\ncpu: 8.2267904993335 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.84169081045175,
            "unit": "us/iter",
            "extra": "iterations: 18017\ncpu: 38.840030915246636 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 162.2785502802071,
            "unit": "us/iter",
            "extra": "iterations: 4314\ncpu: 162.2766736207702 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09405548223229476,
            "unit": "us/iter",
            "extra": "iterations: 7412923\ncpu: 0.09405485353078658 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2762100631131953,
            "unit": "us/iter",
            "extra": "iterations: 2534172\ncpu: 0.2762066450106783 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0564142659071196,
            "unit": "us/iter",
            "extra": "iterations: 662836\ncpu: 1.0564067325854372 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.4532898062115036,
            "unit": "us/iter",
            "extra": "iterations: 203277\ncpu: 3.4532659130152625 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 13.625588669736795,
            "unit": "us/iter",
            "extra": "iterations: 51461\ncpu: 13.625487048444517 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 68.00682038957831,
            "unit": "us/iter",
            "extra": "iterations: 10291\ncpu: 68.0022738315034 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.39430609442167,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.3913751931998 us\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08a24b83b07ab7f06d58f717d57e1b13810ffdad",
          "message": "Add benchmark action (#141)\n\n\r\nCo-authored-by: Jeppe Pihl <jpihl08@gmail.com>",
          "timestamp": "2021-07-15T11:13:37+02:00",
          "tree_id": "089f32b31a65d5bb7d50ee3b064fcce665095e81",
          "url": "https://github.com/steinwurf/fifi/commit/08a24b83b07ab7f06d58f717d57e1b13810ffdad"
        },
        "date": 1626340601264,
        "benches": [
          {
            "name": "BM_binary_vector_add_into/binary_basic/1600",
            "value": 0.8310880450158337,
            "unit": "us/iter",
            "extra": "iterations: 840047\ncpu: 0.8310551909595535 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_sse2/1600",
            "value": 0.030012140578026234,
            "unit": "us/iter",
            "extra": "iterations: 23261551\ncpu: 0.030011693588273637 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_avx2/1600",
            "value": 0.018268088489241142,
            "unit": "us/iter",
            "extra": "iterations: 38307225\ncpu: 0.018267609178164168 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/binary_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_binary_vector_add_into/math_binary/1600",
            "value": 0.021024309616966098,
            "unit": "us/iter",
            "extra": "iterations: 33497782\ncpu: 0.021024187840257596 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_basic/1600",
            "value": 0.8334646310438133,
            "unit": "us/iter",
            "extra": "iterations: 839378\ncpu: 0.8334410587363497 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_ssse3/1600",
            "value": 0.09836581804662348,
            "unit": "us/iter",
            "extra": "iterations: 7126127\ncpu: 0.0983636280970013 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_neon/1600",
            "value": 0,
            "unit": "us/iter",
            "extra": "iterations: 0\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/binary8_avx2/1600",
            "value": 0.042467320182587656,
            "unit": "us/iter",
            "extra": "iterations: 16472743\ncpu: 0.042466535779742305 us\nthreads: 1"
          },
          {
            "name": "BM_vector_multiply_add_into/math_binary8/1600",
            "value": 0.04477122285400879,
            "unit": "us/iter",
            "extra": "iterations: 15629229\ncpu: 0.044770484583724506 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/1/1600",
            "value": 0.8609158379842867,
            "unit": "us/iter",
            "extra": "iterations: 812703\ncpu: 0.860897685870484 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/2/1600",
            "value": 3.3799806885851855,
            "unit": "us/iter",
            "extra": "iterations: 207453\ncpu: 3.3798810766776106 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/4/1600",
            "value": 13.444610455069125,
            "unit": "us/iter",
            "extra": "iterations: 52080\ncpu: 13.444394546851006 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/8/1600",
            "value": 53.609893713576966,
            "unit": "us/iter",
            "extra": "iterations: 13066\ncpu: 53.608469309658645 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/16/1600",
            "value": 214.82775721137185,
            "unit": "us/iter",
            "extra": "iterations: 3269\ncpu: 214.82346558580608 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/32/1600",
            "value": 854.5515013904106,
            "unit": "us/iter",
            "extra": "iterations: 820\ncpu: 854.5345073170729 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_basic/64/1600",
            "value": 3416.6754745855565,
            "unit": "us/iter",
            "extra": "iterations: 205\ncpu: 3416.5941756097577 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/1/1600",
            "value": 0.2743956085204456,
            "unit": "us/iter",
            "extra": "iterations: 2551084\ncpu: 0.27438954185750103 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/2/1600",
            "value": 0.44402567181610875,
            "unit": "us/iter",
            "extra": "iterations: 1576347\ncpu: 0.4440173090062019 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/4/1600",
            "value": 1.0535806017968108,
            "unit": "us/iter",
            "extra": "iterations: 664757\ncpu: 1.0535610365893116 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/8/1600",
            "value": 3.81688702713637,
            "unit": "us/iter",
            "extra": "iterations: 183243\ncpu: 3.816796843535625 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/16/1600",
            "value": 14.573300918723891,
            "unit": "us/iter",
            "extra": "iterations: 48056\ncpu: 14.572938696520714 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/32/1600",
            "value": 57.72452544348154,
            "unit": "us/iter",
            "extra": "iterations: 12127\ncpu: 57.7231356477282 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_ssse3/64/1600",
            "value": 229.6802007186719,
            "unit": "us/iter",
            "extra": "iterations: 3038\ncpu: 229.67427419354738 us\nthreads: 1"
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
            "value": 0.16367736335088023,
            "unit": "us/iter",
            "extra": "iterations: 4267100\ncpu: 0.16367238967917336 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/2/1600",
            "value": 0.2534154123537638,
            "unit": "us/iter",
            "extra": "iterations: 2737973\ncpu: 0.2534096231043907 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/4/1600",
            "value": 0.6576226043714792,
            "unit": "us/iter",
            "extra": "iterations: 1064291\ncpu: 0.6576115921303487 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/8/1600",
            "value": 2.131828517259254,
            "unit": "us/iter",
            "extra": "iterations: 328224\ncpu: 2.1317924192015165 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/16/1600",
            "value": 8.161707341631388,
            "unit": "us/iter",
            "extra": "iterations: 85791\ncpu: 8.161550850322298 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/32/1600",
            "value": 38.69376228180193,
            "unit": "us/iter",
            "extra": "iterations: 18081\ncpu: 38.69289508323661 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/binary8_avx2/64/1600",
            "value": 163.79356384277344,
            "unit": "us/iter",
            "extra": "iterations: 4204\ncpu: 163.78741698382518 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/1/1600",
            "value": 0.20542805043647652,
            "unit": "us/iter",
            "extra": "iterations: 3406845\ncpu: 0.20542401694236248 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/2/1600",
            "value": 0.3024764821590728,
            "unit": "us/iter",
            "extra": "iterations: 2317299\ncpu: 0.3024693800843129 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/4/1600",
            "value": 0.7228953311077883,
            "unit": "us/iter",
            "extra": "iterations: 967207\ncpu: 0.7228798157995117 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/8/1600",
            "value": 2.172624252628503,
            "unit": "us/iter",
            "extra": "iterations: 324111\ncpu: 2.172574636467135 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/16/1600",
            "value": 8.183080907074348,
            "unit": "us/iter",
            "extra": "iterations: 85239\ncpu: 8.182910451788489 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/32/1600",
            "value": 38.858206907229054,
            "unit": "us/iter",
            "extra": "iterations: 18023\ncpu: 38.856753370692836 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8/64/1600",
            "value": 161.2559910296073,
            "unit": "us/iter",
            "extra": "iterations: 4332\ncpu: 161.2517197599273 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/1/1600",
            "value": 0.09377555418076941,
            "unit": "us/iter",
            "extra": "iterations: 7484733\ncpu: 0.09377345992168411 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/2/1600",
            "value": 0.2771174989972637,
            "unit": "us/iter",
            "extra": "iterations: 2525336\ncpu: 0.27711269866663457 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/4/1600",
            "value": 1.0532755470229698,
            "unit": "us/iter",
            "extra": "iterations: 664957\ncpu: 1.0532537156537851 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/8/1600",
            "value": 3.452956911926295,
            "unit": "us/iter",
            "extra": "iterations: 203287\ncpu: 3.452892713257617 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/16/1600",
            "value": 13.652604894727586,
            "unit": "us/iter",
            "extra": "iterations: 51346\ncpu: 13.652380711253134 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/32/1600",
            "value": 67.80990583592322,
            "unit": "us/iter",
            "extra": "iterations: 10326\ncpu: 67.80855064884732 us\nthreads: 1"
          },
          {
            "name": "BM_vector_dot_product/math_binary8_reference/64/1600",
            "value": 270.69641993596,
            "unit": "us/iter",
            "extra": "iterations: 2600\ncpu: 270.6844746153846 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}