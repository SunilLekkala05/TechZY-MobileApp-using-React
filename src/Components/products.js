const products = [
  {
    id: 1,
    discount: 19,
    brand: "Apple",
    image:
      "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Apple iphone Air 256GB",
    rating: 4.5,
    // bestseller: "BestSeller",
    discountCost: 96990.89,
  },
  {
    id: 2,
    discount: 46,
    brand: "iQOO",
    image:
      "https://m.media-amazon.com/images/I/613RKG4NCgL._AC_UY327_FMwebp_QL65_.jpg",
    item: "iQOO Z10 Lite 5G (4GB RAM, 128GB Storage)",
    rating: 4.2,
    // bestseller: "BestSeller",
    discountCost: 14999.89,
  },
  {
    id: 3,
    discount: 5,
    brand: "Realme",
    image:
      "https://m.media-amazon.com/images/I/81c-THT67CL._AC_UY327_FMwebp_QL65_.jpg",
    item: "realme  NARZO 90 5G (8GB+128GB)",
    rating: 4.2,
    // bestseller: "BestSeller",
    discountCost: 19999.89,
  },
  {
    id: 4,
    discount: 46,
    brand: "iQOO",
    image:
      "https://m.media-amazon.com/images/I/61ImCLk1sqL._AC_UY327_FMwebp_QL65_.jpg",
    item: "iQOO Z10 Lite 5G (Cyber Green 4GB+64GB)",
    rating: 4.1,
    // bestseller: "BestSeller",
    discountCost: 27999,
  },
  {
    id: 5,
    discount: 16,
    brand: "Apple",
    image:
      "https://m.media-amazon.com/images/I/61FSUAh5yHL._AC_UL480_FMwebp_QL65_.jpg",
    item: "Apple iPhone 17e 256GB",
    rating: 4.4,
    // bestseller: "BestSeller",
    discountCost: 64900,
  },
  {
    id: 6,
    discount: 19,
    brand: "Apple",
    image:
      "https://m.media-amazon.com/images/I/614MsdnfBxL._AC_UL480_FMwebp_QL65_.jpg",
    item: "Apple iPhone Air 256GB: Thinnest iPhone Ever",
    rating: 4.4,
    // bestseller: "BestSeller",
    discountCost: 119900.99,
  },
  {
    id: 7,
    discount: 9,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/610lbucItmL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy M07 (Black, 4GB+64GB)",
    rating: 4.2,
    // bestseller: "BestSeller",
    discountCost: 10999,
  },
  {
    id: 8,
    discount: 32,
    brand: "Realme",
    image:
      "https://m.media-amazon.com/images/I/71RiAp+yw5L._AC_UY327_FMwebp_QL65_.jpg",
    item: "realme NARZO 80 Lite (Beach Gold, 4GB+64GB)",
    rating: 4.2,
    // bestseller: "BestSeller",
    discountCost: 16999.89,
  },
  {
    id: 9,
    discount: 19,
    brand: "REDMI",
    image:
      "https://m.media-amazon.com/images/I/71eQsL8sqcL._AC_UY327_FMwebp_QL65_.jpg",
    item: "REDMI A7 Pro 5G (Mist blue, 4GB+64GB)",
    rating: 3.6,
    // bestseller: "BestSeller",
    discountCost: 15999.89,
  },
  {
    id: 10,
    discount: 25,
    brand: "Apple",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2hq548Ls1u6AZ0UG4dGY3Irf7YahMXbZNl5c96CT6XxRZdA8pKvPdWfMyhnN_dmrf6lsHK3oeysxIC_5CNw6e8xE3-GEHeCupniTGmIvMxx8Vm510zql_kA",
    item: "Apple Iphone 17 Pro 256GB Cosmic Gray",
    rating: 4.8,
    bestseller: "BestSeller",
    discountCost: 140000.89,
  },
  {
    id: 11,
    discount: 2,
    brand: "iQOO",
    image:
      "https://m.media-amazon.com/images/I/61IOl0PvbFL._AC_UY327_FMwebp_QL65_.jpg",
    item: "iQOO Z10R 5G (Moonstone, 8GB+128GB)",
    rating: 4.4,
    // bestseller: "BestSeller",
    discountCost: 23499.89,
  },
  {
    id: 12,
    discount: 17,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/51G4GBygGCL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy F06 5G (Lit Voilet, 6GB+128GB)",
    rating: 4.2,
    // bestseller: "BestSeller",
    discountCost: 16999.69,
  },
  {
    id: 13,
    discount: 21,
    brand: "Vivo",
    image:
      "https://m.media-amazon.com/images/I/71ur3D4Wt3L._AC_UY327_FMwebp_QL65_.jpg",
    item: "vivo T5x 5G (Star Silver, 8GB+256GB)",
    rating: 4.4,
    // bestseller: "BestSeller",
    discountCost: 33999,
  },
  {
    id: 14,
    discount: 24,
    brand: "OnePlus",
    image:
      "https://m.media-amazon.com/images/I/61T18EfkX0L._AC_UY327_FMwebp_QL65_.jpg",
    item: "OnePlus Nord CE6 Lite (Hyper Black, 8GB+128GB)",
    rating: 4.3,
    // bestseller: "BestSeller",
    discountCost: 39999,
  },
  {
    id: 15,
    discount: 31,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/71S8BY96MwL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy M17 5G(Silver, 6GB+128GB)",
    rating: 3.9,
    // bestseller: "BestSeller",
    discountCost: 23999.19,
  },
  {
    id: 16,
    discount: 55,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/411RhleBYqL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy M17 5G(Silver, 6GB+128GB)",
    rating: 3.4,
    // bestseller: "BestSeller",
    discountCost: 18900,
  },
  {
    id: 17,
    discount: 23,
    brand: "REDMI",
    image:
      "https://m.media-amazon.com/images/I/81pHku2Z4KL._AC_UY327_FMwebp_QL65_.jpg",
    item: "REDMI Note 15Pro+ 5G(Coffee Mocha, 8GB+256GB)",
    rating: 4.2,
    // bestseller: "BestSeller",
    discountCost: 39999,
  },
  {
    id: 18,
    discount: 11,
    brand: "Apple",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEnvxkvMNvDcO8iZsLFVtfvyZOcKzRA0q12IUetQDiiIqpKsgc-tZVmgffZobNFbH4SXPlgsCRkswzQHyTA-BjROPWMCjbPsX5vO2DDOcHTqZYI90P-Ykm9uo",
    item: "Apple iPhone 16 Plus 516GB",
    rating: 4.3,
    bestseller: "BestSeller",
    discountCost: 79900.89,
  },
  {
    id: 19,
    discount: 20,
    brand: "Samsung",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5cwoiJoR5oWvFoL0aeoYyj8OL0oXhVNyU5BXCOyCHduz6KmF99Npg2PaBBe5ueENoKZvpDaMtvjCjc6DusvrNchrW99BkjLAyQqPoWGwKHN9meLVrEsDq-g",
    item: "Samsung Galaxy Z Fold7 5G",
    rating: 4.0,
    // bestseller="BestSeller"
    discountCost: 174999.99,
  },
  {
    id: 20,
    discount: 31,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/71PQ2tp0jwL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy Z Fold7 5G",
    rating: 4.3,
    // bestseller="BestSeller"
    discountCost: 33999,
  },
  {
    id: 21,
    discount: 18,
    brand: "Lava",
    image:
      "https://m.media-amazon.com/images/I/517h1ScmuQL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Lava Bold N2(Indus Black, 8GB+128GB)",
    rating: 3.6,
    // bestseller: "BestSeller",
    discountCost: 22999.19,
  },
  {
    id: 22,
    discount: 15,
    brand: "Samsung",
    image:
      "data:image/webp;base64,UklGRtocAABXRUJQVlA4IM4cAABwgQCdASr2APkAPkUejEUioaESCMZQKAREs7cHYEuVRI4+yEBiFg11omu0xJ/24j8zPmpdEz1Y29Af4+w1vyfif55fYnshvGGpZ8w+8H5H+5fuD8XO13gEflf8q/y/9m/cf+88mkAD9H/sn+89JP6zzT+v3+19wD+c/z//Rf2r94P738//8jxXfUvYG/ln9m/33+U/Ir6f/7n/u/6f8x/cx9O/9//M/Af/Pv7J/0/8F7Zn//90f7beyd+zxv8He758Og7RfyJwBkQZhTUMik3p6RvcsRMcg+yvqmVSB7f7s5QFUT8Vfx52gpTM8Bmd9Ms1QWZDJsmx8B0wywPte4xGJrpI+bOB7DeshuL3e/cF6/luWEup5uj6F/jgo7rrgpwzA/8TWX6WdejXHWX73QtfUwIJ7l3mrpYYC654WBxaCvw6zMZiIV0qXVmEYMrYyIA8ooRtjnlO5OS7OurqinxdcaAFf+PUHC/KEoD6fVlpGIlDKn7w5pUHZHaT++ZnTq7oDVOmMKgGjtYnSwtpbIDudwuW3lTLFHVPHGlJHIM9kJfRT/LZ86/WFN+UZK9vwJa8LmoUQeqIBiah/klaC8Dc6ooNUeLGvLScT2qyea/pshpCNQJAavc2jxyC+V2dI07DNqMETWf72+BvU1J4pQhnYP0WqWr0dprInyAX4sIIcK0lJG1/IoqKPrp/cHiCqxLlYPFf+DQrSa1hQDp+1E3d9fRzjeBL55XExu/WQSRRX/GIjZF9Ze8pl8HpViDZWEaQJsnkra1dUu8FP87HIyVL0gCEkahp5QDYkbwk6a3fJmXGIFeML9jArQFCADpCSPG42QnQfhZF/Z7BLBiw8yGTIR/n+yubGPbbtuO12JxmB+Cn9pfmJffSijmuXVf/OwN9yFDTXPWlBohp72HW4vPrzY0qODh+BOMpIHOW/8TaEbSwAE9Q9MqK7XbmDDGPk7AjX3uzmOB8AyrJ1p789a7M5Aoj/bNS6uoyCB99SnrcI2EB1n1pQ7ezrlmk6sTZyoBTBiXBXCYu1MJKBNIn0niEJK3a5D6uT2HpXdh59ClTj+hHN5BAIuEitHWm6YEV2fSUmwf8CXlTCtj5GVmW7NknQo0C0Kd1sGYRfKLKTDYb77481e+sO5XIzZ7KA7FHpK/MPYV9Q0I6uNdcm6ctyTcejHiWQ9fAFCozttDskzyf4PAAEwoLOP2pS/gitSNVBL/0dFjZbczzRFCvqZqlfpnSL0O9tcX3ZkTT/kkaqjOB6HsZmIJersNQzFw0xmF/lqPXDk3fcGSOCP63QwabOvnvHbLk2lDvD9nhTYVqgzd+dEJrk399O17OQtCiaJLyWtoiuZJTNPbkfnnb00il/+aKJvLc+1FjXPg7isG8mIA7ekeOwAAA/ul5H7y1rj9yODyRJ1S23Tgx1dLEJARZLWmu8NNVW2uuHZgDd3+/JySX+c1d6DwvcyTz6mdL/jGfY44ei7jovWBaTSzNJjnkv9yApTI48hrCSRM3W//tqX3rQFBaHPYdTLZIVaFCOEkzii2WnpBJyJnV9Le9nuVtNKncSwFcm5aWrxMBnjOLzlQHfg1xnmGl0i/ROpiK4BziECHQbe7Nc40j/E14uU92M8ndbfEikfz5vfHp7n7oRT4YEZdegYl6frMQu+5bWuBwD/1al8AQyb7mAH3fjaMEF3lbaECZnZti9Z7EfZZFM3MK3x/Lrf6WbfnlaRCHC0WyBU3PmdVWWr0P5LfBufMpMPn1fHRtQJfwD9/RGuTlpZRfM8caHesYOpFssyCH3h5rJU82ajbeHAAYaLBjKDv/a9TM8AeO2uNYR3Sb5W4Mlx4fl8aWuH/BDXWsp4XU6LdA+ENnitTHuNAR1WSmXdBZ3DthAC3hBoNKBMsToIVkKUH94QjxzLe35S4FsH5MbPon+HhuuFc1hnioP3SY4mxGSQpyGzIQox+7mAzdiVexrE4xdnu1ZqoNl54wgqBOzh2Q78e9Lj96TVH3sKvhjGQvOtH/uyepU93Dm+WiOLgxchPav88cSlAYFSo6m/oMxW1xr+FOnhd3Tnzb4NX9icfIh50G9vm6Ju47Q2sOLEA37m3ZI4mpaU/TyRaklJp2v3N2XQU4ObRlZp/Mkvpz53BqjH5c71+wYFmopRIm2ZO0s9swbDgJ36Is4JX6BM5xoibaL6/AlTdomKAPa7ZkVZDU0A9SiuhBYy3N7Yb8e8Ho/K8G4XmGggUSykpYut80nD9iUBFTFMoEnjTNGh4Th2b9MnTQOhTfqKutEJgyC+adWNlmYM/J9dCIvrJtvrKdS4AYG1dMkRCZVhoOM/YKWrcJt/Dwi6lXAep5aCl3XRZaaHFIR4CDHXVpHrMeGB6qRuCgt7GcEGNYOyr8yrmAVX5XNJHNsQNAjcoUlwfXagsUWjpieOuVr1rQ+HO6y0Y3n07A/mdQoGSmdY0aBkPWzboq2+YSMiXnKxHgMmfOvhLyUY5jYCbSU+IajmkeqP5RRhVcqn0RNPxGEcFeudTeE5SK7bQFzIu1JO9taF+WtJeXdvcc3ekhiKcM9a21kjfN4SHd8PIDZonWHTL7PwkSmWyUV35GDYUwSAzOp7+y9tWVb4VMWB5CJH9Vz0rAzEaMrfPJ5U/4GZuhBJATFFommmjpTlzTo6g9BMtYnyJlY1GReTEuKAKc7alt/LjYGu2bXxXIdtXF4Nrj6KlpZ2HRzx46YoyeHwJZVEo2TXTd4zXLF7YaEy1bvxB4OEuHsRCTA4lpvVM5fhbHhM+1h9IjGR03nm4tEsLJdwkBPOAdpc9VV6Pf77WBIUC8s64kQLxAhw6vbbqSc1jDSfhs9nNXVvncrNGMwrSTdMLaZsbbTEY0kW4OQDkX8GpSYm+u0jbku/a1CRXpsgF/Mp6mZmRI3+BgvKaDFpLh3AbXcI1nw2qGB3/8/lnuZ/4sR2w9N4XEkZQN3jnPIE945kIrZv4mBVx/nf1z67Wh5yB2/BW7aXghAxoL5qdz4XZQr7Kcj0mTQtudojXIKK3ugfdgqrIJAa+gcONbyvUeisjaln47ThsypH/I8qsxWAGcNi/qRiaYkeZnUoPmaPNbFQYBrxpen4Kuq+3Mww3SB7CZXk8iwY9iohfQJRqldqGIAYMdyjztHXBBqnLFH5q3JllGj1U+MVe3FzNLeDgRDvKBwaOJgSO78m0lSh7q/AoyT3puZQ5Aamn6kje3aa5xEiErGC9JWmUn86TH4H2UiAJELS6DG/Rk8Q09z9cDv08K9qYyf+YBP4GfWh23xcPrMAJfunVL30H4AudTEzBww93rgPeboVtIj3FT5e0+E6KmF2ybjl45IxEDmlRPjYRYMjcBY1rGFI/9ArWhkzeIQNUJd+ENM3AKYgZUpe1mJbhxEwrhbm1/vzDlnYnELhzGaVkIj59FG3FrAK5ED3vQxLpjhse+LJxn6EcNVH6shZ3n1EPcxt74vocvL0EmBff7O9oqt8QU9M5WGRsepYHVZBFq5f+4twrQHL/ouKldRAzS9M2ksTDSUoqaqWRlSoDhE3C368CydIn92QcyFCuvdf1uyx7zEAF3yOl6gwkPQMGZ138IatR7eRgE07hRqvTV3t0C+gm8zbjiC6hti5yAefe9v2qxl+bAl984WghO3LpoJNJpyVzX/dCH5xss3xZwc1jdetE8xElfRrA8ly81vYzGOZO3Nd9MAeB8Qs97KT6+6lcqhXNud7/JsP+dz4TjgR3iGMpOP2cWiwNKwp4EV4pkTrNCreDrPhIBYpIITuRD7EqHIrJdwXmmEGj8yCNqil6UgrUCTNwyKxyg0basKfltWLhC2hThaRlxxrnqWTjAePRbutseB8vja5iKiPV2bkoQFeJ1QKpgPtdm0XPydBzmZVD3CNqp+QvmMUzJK8alrICbJ9eURpJrbbjMAjKL6v3q9p19pIxzb+VW/6BhA7o2neXs/nPSocb8IxpXplKWou9wDPbs2jUb1bbLpo1+la/ljEplcfEEKOrTtPYMQxjsSrPkZ3mIOfff2oiebHqwqxxpjbwr6txp/cA2hPwQfrChNrjyBngCf6lrG8QZZdIyLuGLsOqYPSFpjs0Ra8U9vrNsijpZblmhZMPudn4HxBZu8xUzBhoJPrYUpOQugVpIzmHMEhpvEdezoKvChEh/sAj3EjI+zyVXlYVnNADZi+g0ndZnHFwxq0IFciM4OCsGPAfXfUY2B5EkWFn3Kr0uQNIrERlOVuXzX13IcaV4CB8AaVRuV4n2qnLJr9SAQnZRhVhjBUPjPH/5OTVEyUTi7SU1pmBSlPteAuQTvk24OcHUpgfERw2gudhQpQOpPjYLqy1650FfK7IIQKT66AxDBENHn0Q3+Wlg3DbrQuAx2q6xk/WOTSycSkCZm+ULZb6iqRomEsTTqbAYxCXeby3qy1JmKvG4VnDcPHC/8d/k4uhvm0/BIWcaGif08m+DpLysJXz+FYU2esSLJysaE+y/a+jVJvay5aTbK0mRfuewPtTClK84FzfuNKmfEQmwgK5gTG2srv3ODINjS/AVAUerpzhi3pOndvfZ99W28Y6d8yz++kMX6AanaqiMzLY154ZMjIfauYZkJKfZV4UDAuCzuO+ne9MFiJEWwYPtw5HILxKi25oWCTXPLg7+5MKEz92JQLaluSYF/0QrRsqle1QLRKcSxFWKEJz1BgK2gEEgkBCyAQGr1FWJ/XAcPTf5NMjRpSex/URHONY3MhkyffDZVjngn/4pLhM/sXH6Nx23qvgdIvYy6CKFWqTs95hPOBP0fzbDt3dgwxOQhBqdeDzr4OdirKRX0uZj7lwzQw56SnI59p3SVr1vITtXyAsKxZy1rzi8viN3Jmo0t4wmxl166O5TMskyBvb2KLeexUuIsPAM3SV11PeBKHK46K1YzCO+Zs2+U1JZivxwd6zfPcf5nkAjqisSmJRkULiViM0gAEs7Qi1ckmTqpIiCa9Zf/9QN1DYV/AjiPBefe9h8o+A2F9OyEzOKZWkt2HAbFiWYC76m9Z/Fm3B5ph+QuK6SXbspoUHgQ0k3OYyYEcpP0ZPJEcqtGlyhG6MH6RAMO/fDC01vJnyxF5vgl6Imh+84y1B7vu21OXBzUyJpSH2q1UeMfVOQoyVdgRKal+6UcCqzRzAHnSV3GAl4m7dyfC5kPDoUNWfN4ft4RJcnTDVmKIgF+qw1mIIj4Eb32en2TkOVIwOTc8l8Fid7sGbcUSyzSxDUXrn1iNLfFTnVjC+4v/kZrXCNaYswo/NyzfwlmfimESC+AK3FT3QUPu8gFqVUiuBo1KM0p0sFBShdqNz+KfBSRdeO2sqpQImOf7VeFdDcp8IJdkorJkXDupKc1ABMIpSx7y0b7ZjafzByx6Uk9xMUfPlHdO+B5dNDkC3a3MW0FuCIQ8sQRFGjagQaZu/4eSqoZuEyZml2XbV/4OIZBe8AcRsdzjnqNwbV3uun6xEWlaXZkSRSme4oU0bW+hnGLE6nG61TYBKnGqeslYbYisDqZWKdi51saH60St41SaXnrjpQwarLIek5lVuJRz3FSYDsjNpp8b755d+A7yUZP97ILl0cDJtwZ9Ot37r0n7Wf5DuVIyT1p7zRlR1dcrChHw2OGIIt065+ExCwPmT13di68yOzO55dsO+oS99GCHJxnuuMtELgyxHIViQGha0U+CU/wqQA2WcZ/kW/JLlQie8pDRBZBHIdnxLr/RWctKk9LxOrDLERcyk2+f65VM7x+N9pPdEJ4NRdXE/iWaHNDmOUnkGZJhYw+LXe3oVt6FU2QODeizIb+HHbxdUuGgc3byBZ/7KC99Zy2yRN6mpiRrDI4JIu0vxkqOtFT7iD9Kv2ZaeDyxNXLAAo29iN3YCQgvMwhcIMHp52boUij97BXMlS9gj8gmc/MVxLjs4j0hlthRnoQshz8L4pGJJthbiNPVaeZbVVz1A2oOMPsXaVJi45zIWKE0iQ8Bbym+6TSfFAim6dJWF7It89SntiJp9L2lqSkNe7d9TFKmcK/pQIbvAuSVIOD3JcS1voLP831ManJ344nlFp3Nw/C0udNCrwXWBf63GnrC2MobMorhsahWtlHdOoMSOM0RdNnbzbV8hXkRoR7ntcqoOgYNZUVSCaXtsUsgWPsZio3S4wdWSx7s2d1UbjhKT96X7Ds3GHxjjkeer7Va+O+/k3nYIHkQCRcLfEJw18K23s/tgieGJEnIQol9BkiGrQeSGpPPrIdQFRtIqdG3LooR8rXJ2pCqojmOsUxkQvP33DP8A578KUWoJVHe3jX8kUgCfBgneykYAdktpa6L4i0ulBDfbeQE0vlNysYhhLuA7GO2yYTAPozv/iecB/striCgjUghQdjtsIG6XkQ0rWrqM7FIFs1Q20iasse3B8noMIa6TSwFfJArsnzBV0HSvC+Z0iihYQ7FUhZEugUm7kIkJGgt2c6mmY6orPhzR5iTqNuUFiKxe+F2hDJjz88/E7aDSlk5l5/KZ6cnN9JWm/z79M19Osp6lNasg1YPAtlVLtmA1Mt+51oOvVl0brtb9JdF7Iv4lyfSYRKyXX26lOHN1Di+MZUEGOGd9HLf0CayI7UNBZhBFkfLo0eusb45aEjEoKenb7QLSZ9yjJITXEG+oeFyQnn0IaLcLi+VTeHHyMXnoLCoHqc+5Ov/QsRvzKzF+t2Q+U8PhSiV+2joWVDM+y3zakbnsBo9Y732r26WBb013GHUyQTUxJpkiQ9tFGW0tMCNbem2CQ3i+k9kM54SEqjlk2anzKohpsQ/WXLEfROTCs5y5OgYj+xLcZ+wQ7zejEVexq0+Sg2qRHDLR9HtHUKTI06GOiDb9AplTZItZqsUkwLG3EogWbF06O/vIOxMZnGYUz+WxPalwhZ3B6ILPTqqaUrgpIvIgMcn667sNIAW5NF8OYKVUlmGm1duJNa9Gtt96fn8FZ8bbgdV4QakzGOFSTWGeL7qq3fM1bjOMScqW8ifwiWwXj9OxCMDjVF3okpdsoAdUzPctHi0Y+acqCZnaBqnAKa/6QfPrbZmZEUVdf8p2PYgOtpsSc/PO1TCF40lhmbVzdePm0ajRK3YMm6PmxWScc4tELQR8A/Ia+Bog8vujK8Fuj3Xhhwql/vwn+X3spHXo1syugtZl/SFTiTYyst+L2bmUfugl6QADhloFtSrkf/1Bbjn4CC2MkBa0Oq8Z9ch4lj+qQ4FK8dUpNBehLJwEhYG5VgvOKUFAAP1prAroVAJDDF4BahKM9Gw8JLTPJMy2BhtjzLMUSKb1z5B6Lcdkg3JqlviZsuzMYBblVmAEVcGf/i8/wal2nkS/IeXrUyyBi8iLitcH2xVTYKTtDYRsWMd7PzpsPo1psIv76BuGNV9aHgT2V7+jlgbJRBL4bJZFQv/IpcI1udxjZdsgbsOtPywWdVynt/40zyYpPiLbEy0IcEFqUS1+4adiX7ci/fuvy0yOaLCJjpWZu8k7BXhFXzBtaw65b47ithVdfE5TcMAEC9q2DXB7kE0F6QUqRVt4HznNauhSbvvUmXxPmyLk29BXPKvbM6VIkOOiSS6p+FHRnVCYmcQj5JKShsui85/ld0DoS3hjFLsg1GHn7j0oNkyaIOBuyCi9szC8LYHaFA0VPf8pM84MSfkQ1clnorvTnu3xeZKtEDv+PSQ/Xr2Lz2nj+X5duVCQ4SbhhIBNAz9dAUK6Rrynvpfiz5QMkemvbs+7ShdF4nHmeyUmMGmxYdadZaJgQ9roN2ttNlXHLt7l3qLYQuVAHZKKX43AxjZwon+iBQUCFL/wo92Q68omGHse707IUMvBeqmGhqmCL/91bfnn6vyfRbl238KY2HB9rluzq+2zULE0jFpmdlKthZ5dU6t4xmjC4YLCdIjMTIO9PuqJ0guAJzYy8IDXtJa8+NXpOHP2gi85Eo3amTPYP16v9viZlqqULnOat4Wj6rrBlAcDGmSzSdy3OHaon9HmzGoPipm39HkrlnC/igQufhLAcOaghRvvvfj5jLmrdquNSttkX3Wvz8u26P4pfV0lE+dxNaQ/uFgTRmojnUp0SkzWTGE03rDyvgNXKuHu6cSGD3HF3rDpXxvkXGvT9WZdRdg+yffhPXAROm4m/h8S+JKDf8lVn6ZxbACaccN2+23dnvxqnXSXsG9hBZviaYwO7YIg0ZZ8nTpMkTRQmZNUiTlFE8Mz5X1hjozNOodVtL1RrE+6BPRacYUEi0gyIZHzDSIkQPRObR0qF9HxH00QxZaYBYRhZx5hXwxo47pSsLEPvAQ9lcpb1i+DvfxyqezT1nSBFQftPZikXbgfOKYSiz08xzEOYFXK3fXLUZtzJkpRmhsGYwOxmvRm1olc3KBtmF+ji3uZC0zyfVd9oRn2qexsKJYFN5+awd56xhrXH+14JAjz+kZRzzwMTVraUczxxuTbKgBLwZRh1XOBC2FMTbW/NEhioeIr+lUwySJaWjT1yJ2eZUJCDR4ij5JzD2bJPyNSGVaKHfFW+Uz9h1L4fNMde6kgXtSZTF4vvgkPz+hHwBldUd5Dd7t/dvvvYw6Sdy+QnbxoInrsYT4WdquO1pAfS8YfcWAiM8+uZNY1uECsGvmcVz8B50tE6pZygHwaN6sCbg0kw6BWgokNzTJ2hI8rvcG4jEyz1u83tG6TamkLdvh1yFqXbYNjg2x6kh9hOQibf086q5LB98mSpd9d4BVVl/HQGOPzo8Klpy0ZWEgzC8xdtc7r4+usMEns94vT/Wxz58JTK+JNR5DDSsKdkV1NQ7RSJ7Ixso9ZSFx7+zrLkYcTQ5Sy5vOaAvHIS3VMy7Mf9KVov9kQfbL/46LJaobgxORI/6EHy7Yiewof4LTJiWoNcl84LpzrphcRTeLMC+smOhZ0HFhGeMjsjjOdIhZcvVOdwC0zxtAQ0bur8MKBTijiBpYYfvSMNh93HWk+GLY4LZndLQ3JxfBwkeg6SyDo+ZeFcsSXrZ1Lq53vabpWvzlUOADYr6/kOT5QT6rQLDTtTCf2j6hLslVsolmNMIjp/aBSRCDk1cD3KoDWOnnRfa+QgW3rod7YgFGV6FSGFIkFXOpG1QL8x96DHlu9B75bi2QYaXSoRyiBwlU6faqfkt5r9F8+CaW4nKOQDngYiaHvbsvqOVV8nAuDfXFJr0M26qgqhmns1xE/72CFU+OB0EPSTzPr/v8FaFnGhIic3W0yN2bTVBkmA6ghrFKJhjDpnNXD9wWUJhNf/QnMnCFPw99sQsQ3Cq5TGFD0dfeyrPuk+GpdItOTMxy93V056WWlpdL3S4yNNYUzZkEH32wCjYw4tJDf1Bbmcc7YwEua7qJwfzU8Ephd8HmK9GRHHmnP0pIjNMYgwYaKuKGLScrHF0CRgZKgnLltRZkHNDygB8RO/8njvkh8JXkligp94/1yJFJjhfecxWCnHjtW4NDlulIOWi1w+M2ql1H9JZE31p7TO8YGWFGVuQAhKot1pK+NJye+QELm6QOH0ukDZK/9iFHAHqWh+qwB+awKtiRMwam/110X0GPSAG2m4jANTB3/T0u8rDCXH83Zgy47PGtzawMbtuJjvuSzDfwtTFKbm6GWv6Lg4wFU9ykmoVwzqPvrvnR2CXvcjH00KR3eXJtWoAgkTaTkiLkJGERPmPo7U03h0WNkPETP/xE8PxSgDfKDerl5OmCne7mIE9vHw9EMIkqv/QMeyuUtzTZ00YkuXk7fhZD1VSzvxtXCtove4b1XFiFl5z9WpRJUhWEUfQMeuS7/ygXCU8GefQDAwdBIoA3WOABewZOp43gP8bbwJKVgIJ8XuufSdTsc+NMnYtAIxQ2qZtSHhQdNLDGnOGBO+sZTT1IE5Jq5alAB+u3b6R7faVrgQOSAAAAA=",
    item: "Galaxy S26 Ultra 1TB",
    rating: 4.7,
    bestseller: "BestSeller",
    discountCost: 150999.99,
  },
  {
    id: 23,
    discount: 8,
    brand: "Oppo",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7z86ip6S2l0o2IETE3aczv1uURLW-rBP8WJxQw-XfNjL-_lSGgZ4xtJ_EYvA3HeLkMDisqoQS8WyXVJDwrlMv_m08Z8kEaTulM1cgXptR5lq2A0nyt5w0",
    item: "Oppo Reno15 5G 256GB",
    rating: 4.9,
    bestseller: "BestSeller",
    discountCost: 43199.09,
  },
  {
    id: 24,
    discount: 10,
    brand: "Oppo",
    image:
      "https://m.media-amazon.com/images/I/41t4RIHRQtL._AC_UY327_FMwebp_QL65_.jpg",
    item: "OPPO K14x 5G (6GB+128GB, ICY Blue)",
    rating: 3.9,
    // bestseller: "BestSeller",
    discountCost: 19999.09,
  },
  {
    id: 25,
    discount: 9,
    brand: "Itel",
    image:
      "https://m.media-amazon.com/images/I/619p86eEMmL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Zeno 100 5G (3+5GB, 64GB)",
    rating: 3.6,
    // bestseller: "BestSeller",
    discountCost: 9799.09,
  },
  {
    id: 26,
    discount: 26,
    brand: "Itel",
    image:
      "https://m.media-amazon.com/images/I/61VJn7ZWVIL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Itel Zeno 200 (Comet Orange, 4GB+128GB)",
    rating: 4.1,
    // bestseller: "BestSeller",
    discountCost: 13999.99,
  },
  {
    id: 27,
    discount: 10,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/61zS1tHvGRL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Galaxy Z Flip7 5G with AI(JetBlack, 12GB+256GB)",
    rating: 4.4,
    // bestseller: "BestSeller",
    discountCost: 109999,
  },
  {
    id: 28,
    discount: 13,
    brand: "Apple",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfRYlsJE5nakbloTH5kzfC3XMRL5mf-LjgNL0F9wS9cgk9bLOOB0VIDZ87yfu8QeAcRyUgGSpvRUXarRSli0dJasjSr9REbBSuK_YuNa2gT7iXQwUBcYgZRQ",
    item: "Apple Iphone 17 Pro 256GB Cosmic Gray",
    rating: 4.8,
    bestseller: "BestSeller",
    discountCost: 85999,
  },
  {
    id: 29,
    discount: 9,
    brand: "Google",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFzNYIkbhMaRXWsBudj1E8blgpwtydxo0doPbGwqmiHSbgeh4vRzrusoE-eT3Y7JqSynOpHO1cST61umwJAkUQAa0L3EUKexq7HCHazI9HwynDOqpAjcId",
    item: "Google Pixel 10a 5G 256GB",
    rating: 4.7,
    bestseller: "BestSeller",
    discountCost: 49999,
  },
  {
    id: 30,
    discount: 17,
    brand: "Realme",
    image:
      "https://vsprod.vijaysales.com/media/catalog/product/1/7/176760635352039e60b6d3a284120a047ff27192fea42.png.webp.jpg?optimize=medium&fit=bounds&height=500&width=500",
    item: "realme 16 Pro+ 5G (12GB RAM, 256GB Storage)",
    rating: 5.0,
    // bestseller="BestSeller"
    discountCost: 48799.89,
  },
  {
    id: 31,
    discount: 9,
    brand: "Apple",
    image:
      "https://m.media-amazon.com/images/I/61zVFiTawKL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Apple iPhone 17e 256 GB",
    rating: 4.6,
    bestseller: "BestSeller",
    discountCost: 64900.09,
  },
  {
    id: 32,
    discount: 12,
    brand: "Realme",
    image:
      "https://m.media-amazon.com/images/I/71J+dpjrzhL._AC_UY327_FMwebp_QL65_.jpg",
    item: "realme NARZO 80 Pro 5G (Speed Silver,12GB+256GB)",
    rating: 4.1,
    // bestseller="BestSeller"
    discountCost: 25999.89,
  },
  {
    id: 33,
    discount: 10,
    brand: "Vivo",
    image:
      "https://m.media-amazon.com/images/I/71ur3D4Wt3L._AC_UY327_FMwebp_QL65_.jpg",
    item: "vivo T5x 5G (8GB RAM, 256GB Storage)",
    rating: 4.4,
    bestseller: "BestSeller",
    discountCost: 26840.89,
  },
  {
    id: 34,
    discount: 31,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/71PQ2tp0jwL._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy M56 5G (8GB RAM, 128GB Storage)",
    rating: 4.3,
    // bestseller="BestSeller"
    discountCost: 33999.89,
  },
  {
    id: 35,
    discount: 6,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/61Q1AgNSO3L._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy Z Fold 5G AI(12GB RAM, 512GB Storage)",
    rating: 4.1,
    // bestseller="BestSeller"
    discountCost: 186999.89,
  },
  {
    id: 36,
    discount: 5,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/71iZ+fdoI9L._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy S25 5G AI(Titanium Black, 8GB+128GB)",
    rating: 4.4,
    // bestseller="BestSeller"
    discountCost: 179999.89,
  },
  {
    id: 36,
    discount: 5,
    brand: "Samsung",
    image:
      "https://m.media-amazon.com/images/I/71iZ+fdoI9L._AC_UY327_FMwebp_QL65_.jpg",
    item: "Samsung Galaxy S25 5G AI(Titanium Black, 8GB+128GB)",
    rating: 4.4,
    // bestseller="BestSeller"
    discountCost: 179999.89,
  },
];

export default products;
