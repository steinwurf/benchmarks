window.BENCHMARK_DATA = {
  "lastUpdate": 1626272430411,
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
      }
    ]
  }
}