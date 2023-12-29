
function Carousel() {
  return (
    <div id="carouselBlk">
    <div id="myCarousel" className="carousel slide">
        <div className="carousel-inner">
            <div className="item active">
                <div className="container">
                    <a href="register.html"><img style={{width:'700px',height:'400px'}} src="/themes/images/carousel/1.png" alt="special offers" /></a>
                    <div className="carousel-caption">
                        <h4>Second Thumbnail label</h4>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="container">
                    <a href="register.html"><img style={{width:'700px',height:'400px'}} src="/themes/images/carousel/2.png" alt="" /></a>
                    <div className="carousel-caption">
                        <h4>Second Thumbnail label</h4>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="container">
                    <a href="register.html"><img style={{width:'700px',height:'400px'}} src="/themes/images/carousel/3.png" alt="" /></a>
                    <div className="carousel-caption">
                        <h4>Second Thumbnail label</h4>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>

                </div>
            </div>
            <div className="item">
                <div className="container">
                    <a href="register.html"><img style={{width:'700px',height:'400px'}} src="/themes/images/carousel/4.png" alt=""  /></a>
                    <div className="carousel-caption">
                        <h4>Second Thumbnail label</h4>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>

                </div>
            </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
    </div> 
    			
			{/* <div id="wrapper">
				<div id="visual">
					<div className="slide-visual">
						<ul className="slide-group">
							<li><img src="san_pham/soi/soi_poster.webp" /></li>
							<li><img src="san_pham/ho/ho_poster.webp" /></li>
							<li><img src="san_pham/ran/ran_poster.webp" /></li>
							<li><img src="san_pham/chim_choc/chim_choc_poster.webp" /></li>
						</ul>
					</div>
				</div>
			</div> */}
</div>
  );
}

export default Carousel;
