import React from 'react'

function Testimonials() {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Clients Say!!!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-1.jpg" alt='Could Not Load' style={{ 'width': '80px', 'height': '80px' }} />
                            <h5 className="mb-0">Ms.Priya Gada</h5>
                            <p>Mumbai, India</p>
                            <p className="mb-0">It's the perfect resource for anyone looking to explore the world, and I'm sure you'll love it as much as I do!</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-2.jpg" alt='Could Not Load' style={{ 'width': '80px', 'height': '80px' }} />
                            <h5 className="mb-0">Mr.Tejas Phatangare</h5>
                            <p>Sangamner,India</p>
                            <p className="mt-2 mb-0">This Site Has Everything You Need To Plan Your Dream Trip.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-3.jpg" alt='Could Not Load' style={{ 'width': '80px', 'height': '80px' }} />
                            <h5 className="mb-0">Mr.Rupesh Kohli</h5>
                            <p>Delhi, India</p>
                            <p className="mt-2 mb-0">What Really Sets This Website Apart, However, Is The Amazing Community Of Like-minded Travelers That You'll Find Here</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-4.jpg" alt='Could Not Load' style={{ 'width': '80px', 'height': '80px' }} />
                            <h5 className="mb-0">Ms.Jannat Jha</h5>
                            <p>Kashmir,India</p>
                            <p className="mt-2 mb-0">Whether You're Looking For Travel Buddies, Advice On The Best Hidden Gems, Or Simply A Forum To Share Your Experiences, You'll Find It All Here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
