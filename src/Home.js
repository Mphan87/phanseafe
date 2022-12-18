import React from "react";
import "./Home.css";

function Home() {

  let swlink = 'saltwaterfish';
  let corallink = 'coral';
  let fwlink = 'freshwaterfish';

  return (
    <section className="col-md-8">
      <div className="center-website">
        <h1>Saltwater Fish</h1>
        <div className="photolinks">
          <a href={`/${swlink}/type/Clownfish`}>
            <img src="
               https://images.theconversation.com/files/238687/original/file-20181001-195278-tmwz82.jpg?ixlib=rb-1.1.0&rect=0%2C11%2C3884%2C2581&q=45&auto=format&w=926&fit=clip
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${swlink}/type/Tangs`}>
            <img src="
               https://upload.wikimedia.org/wikipedia/commons/1/13/Paletten-Doktorfisch_M%C3%BCnster.JPG
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg" ></img></a>

          <a href={`/${swlink}/type/Angelfish_large`}>
            <img src="
               https://www.dresseldivers.com/wp-content/uploads/Types-of-saltwater-angelfish-QUEEN-3.jpg
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg" ></img></a>

          <a href={`/${swlink}/type/Damselfish`}>
            <img src="
              https://storage.googleapis.com/swf_product_images/1347_yellowtail-blue-damsel_c505c82c55.webp
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${swlink}/type/Angelfish_dwarf`}>
            <img src="
              https://www.liveaquaria.com/images/categories/large/lg_80008_Multibar_Angelfish.jpg
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${swlink}/type/Blennies`}>
            <img src="
              https://upload.wikimedia.org/wikipedia/commons/3/37/Ophioblennius_steindachneri.jpg
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

        </div>
        <h1>Freshwater Fish</h1>
        <div className="photolinks">
          <a href={`/${fwlink}/type/Lake-Malawi`}>
            <img src="
               https://i0.wp.com/www.goodjosephlivefishstore.com/wp-content/uploads/2020/03/5385675400_133cfd46dc_b.jpg?fit=1024%2C697&ssl=1
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${fwlink}/type/South-American-cichlids`}>
            <img src="
              https://miro.medium.com/max/640/1*CHvAVZJdhSt3oT81INk5SQ.webp
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${fwlink}/type/Tetras`}>
            <img src="
              http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTvM9x8R2okMUGBKj7R5KacXbJ3VXST8rdprAdPORxyfScanPzca5abLipRz8H--315MK6qJCym93ZOsvQ
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${fwlink}/type/Loaches`}>
            <img src="
              http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRKLVjwk3rdA4Rv9Tet50VVsUWKPq1x9gq82J820qfv0oezSy8_OuNv4foSVshFeE_bhWox8ZxCDRd4jFM
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${fwlink}/type/Live-bearers`}>
            <img src="
              https://azgardens.com/wp-content/uploads/2017/06/Blue-Moscow-Guppy-Male-450x450.jpg
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${fwlink}/type/Central-American-cichlids`}>
            <img src="
              https://upload.wikimedia.org/wikipedia/commons/c/c4/Parachromis_managuensis_2012_G1.jpg
               " alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

        </div>
        <h1>Corals</h1>
        <div className="photolinks">
          <a href={`/${corallink}/type/LPS`}>
            <img src="
               https://www.buildyouraquarium.com/wp-content/uploads/2021/02/acan-coral-1.jpg
               "alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${corallink}/type/SPS`}>
            <img src="
               https://www.tidalgardens.com/pub/media/catalog/category/grid-sps_3.jpg
               "alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${corallink}/type/Zoanthids`}>
            <img src="
               http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQAErwDi7h11ZDvBvWME4MXletsNDlMe5UttaQh42KEIaPbY-Znpfz3K1q9-4IU_-YyWYqcsIX1XYkg1b0
               "alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${corallink}/type/Mushrooms`}>
            <img src="
               https://cdn.shopify.com/s/files/1/0270/8504/5844/products/282298397_428558482064821_1471331275735303775_n_1024x1024.jpg?v=1653852164
               "alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

          <a href={`/${corallink}/type/Anemones`}>
            <img src="
               https://cdn.shopify.com/s/files/1/0855/3388/products/FJ6A91512_8a93522c-0a24-49da-9926-e8f1aef8fd33_832x832.jpg?v=1655074103
               "alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>


          <a href={`/${corallink}/type/Soft`}>
            <img src="
               https://www.miarrecife.com/wp-content/uploads/2020/04/image-e1586727340992.jpg
               "alt="https://previews.123rf.com/images/happyvector071/happyvector0711608/happyvector071160800591/62947847-abstract-creative-vector-design-layout-with-text-do-not-exist-.jpg"></img></a>

        </div>
      </div>
    </section >
  );
}

export default Home;