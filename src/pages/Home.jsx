import React, { useEffect } from 'react';
import style from './Home.module.css';
import img_service from '../assets/images/img_service.png';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import star from '../assets/icons/Star.svg';
import icon_professional from '../assets/icons/icon_professional.png';
import icon_24hrs from '../assets/icons/icon_24hrs.png';
import icon_price from '../assets/icons/icon_price.png';
import icon_complete from '../assets/icons/icon_complete.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

ChartJS.register(ArcElement, Tooltip, Legend);


function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Rental Cars | Home";
    }, []);
      
    return (
        <React.Fragment>

            <Header />
            <HeroSection />

            <Container>
                {/* <!-- ---------- OUR SERVICES SECTION BEGIN ---------- --> */}
                <section className={`${style.ourServicesSection}`} id="our-services-section">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className={`${style.imgService}`}>
                                <img src={img_service} alt="our service" />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className={`v-center`}>
                            <div className={`${style.descService}`}>
                                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                                    lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                                    wedding, meeting, dll.</p>
                                <ul>
                                    <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                    <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                    <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                    <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                    <li>Layanan Airport Transfer / Drop In Out</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* <!-- ---------- OUR SERVICES SECTION END ---------- --> */}

                {/* <!-- ---------- WHY US SECTION BEGIN ---------- --> */}
                <section className={`why-us-section`} id="why-us-section">
                    <h2 className={`${style.whyUsTitle}`}>Why Us?</h2>
                    <p className={`${style.whyUsDesc}`}>Mengapa harus pilih Binar Car Rental?</p>
                    <Row>
                        <Col lg={3} md={6} sm={12} className={`mb-4 ${style.centerDiv}`}>
                            <div className={`card ${style.whyUsCard}`}>
                                <img src={icon_complete} className={`${style.iconWhyUs}`} alt="icon complete" />
                                <h4 className={`${style.whyUs_CardTitle}`}>Mobil Lengkap</h4>
                                <p className={`${style.whyUs_CardDesc}`}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={`mb-4 ${style.centerDiv}`}>
                            <div className={`card ${style.whyUsCard}`}>
                                <img src={icon_price} className={`${style.iconWhyUs}`} alt="icon Price" />
                                <h4 className={`${style.whyUs_CardTitle}`}>Harga Murah</h4>
                                <p className={`${style.whyUs_CardDesc}`}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={`mb-4 ${style.centerDiv}`}>
                            <div className={`card ${style.whyUsCard}`}>
                                <img src={icon_24hrs} className={`${style.iconWhyUs}`} alt="icon 24hours" />
                                <h4 className={`${style.whyUs_CardTitle}`}>Layanan 24 Jam</h4>
                                <p className={`${style.whyUs_CardDesc}`}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={`mb-4 ${style.centerDiv}`}>
                            <div className={`card ${style.whyUsCard}`}>
                                <img src={icon_professional} className={`${style.iconWhyUs}`} alt="icon professional" />
                                <h4 className={`${style.whyUs_CardTitle}`}>Sopir Profesional</h4>
                                <p className={`${style.whyUs_CardDesc}`}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* <!-- ---------- WHY US SECTION END ---------- --> */}

                {/* <!-- ---------- CHART SECTION BEGIN ---------- --> */}
                <section className={`d-flex flex-column justify-content-center align-items-center py-5`}>
                    <h1>Frequently Rented Car</h1>
                    <div className={`mx-4 mt-4 ${style.chartSection}`}>
                        <Pie data={dataX} />
                    </div>
                </section>
                {/* <!-- ---------- CHART SECTION END ---------- --> */}
            </Container>

            <Container fluid className={`p-0`}>
                {/* <!-- ---------- TESTIMONY SECTION BEGIN ---------- --> */}
                <section id="testimonial" className={`${style.testimonySection}`}>
                    <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="text-center">
                            <h2 className={`${style.testimonialTitle}`}>Testimonial</h2>
                            <p className={`${style.testimonialDesc}`}>Berbagai review positif dari para pelanggan kami</p>
                        </div>
                        <div className='owl-nav'></div>
                        
                        <OwlCarousel
                            nav={true}
                            navText={[
                                `<div class="prev-slide"><i class="fa fa-solid fa-chevron-left fa-lg"></i></div>`,
                                `<div class="next-slide"><i class="fa fa-solid fa-chevron-right fa-lg"></i></div>`
                            ]}
                            dots={false}
                            center={true}
                            loop={true}
                            autoplay={true}
                            autoplayTimeout={"3000"}
                            responsive={{
                                0: {
                                    items: 1,
                                    margin: 10,

                                },
                                610: {
                                    items: 2,
                                    margin: 20,

                                },
                                960: {
                                    items: 2,
                                    margin: 30,
                                },
                                1140: {
                                    items: 2,
                                    stagePadding: 100,
                                    margin: 80
                                }
                            }}
                        >
                            <Card className={`${style.testimonialCard}`}>
                                <Row>
                                    <Col lg={3} className="d-flex flex-column justify-content-center align-items-center py-4">
                                        <img src={person1} className={`${style.personPicture}`} alt="person" />
                                    </Col>
                                    <Col lg={9}>
                                        <div className={`${style.textReview}`}>
                                            <div className={`${style.starImgGroup}`}>
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                            </div>

                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet lo, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className={`${style.testimonialCard}`}>
                                <Row>
                                    <Col lg={3} className="d-flex flex-column justify-content-center align-items-center py-4">
                                        <img src={person2} className={`${style.personPicture}`} alt="person" />
                                    </Col>
                                    <Col lg={9}>
                                        <div className={`${style.textReview}`}>
                                            <div className={`${style.starImgGroup}`}>
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                            </div>

                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet lo, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className={`${style.testimonialCard}`}>
                                <Row>
                                    <Col lg={3} className="d-flex flex-column justify-content-center align-items-center py-4">
                                        <img src={person1} className={`${style.personPicture}`} alt="person" />
                                    </Col>
                                    <Col lg={9}>
                                        <div className={`${style.textReview}`}>
                                            <div className={`${style.starImgGroup}`}>
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                            </div>

                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet lo, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className={`${style.testimonialCard}`}>
                                <Row>
                                    <Col lg={3} className="d-flex flex-column justify-content-center align-items-center py-4">
                                        <img src={person2} className={`${style.personPicture}`} alt="person" />
                                    </Col>
                                    <Col lg={9}>
                                        <div className={`${style.textReview}`}>
                                            <div className={`${style.starImgGroup}`}>
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                                <img src={star} className={`${style.starImg}`} alt="star" />
                                            </div>

                                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                lorem ipsum dolor sit amet lo, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </OwlCarousel>
                    </div>
                </section >
                {/* <!-- ---------- TESTIMONY SECTION END ---------- --> */}
            </Container>

            <Container>
                {/* <!-- ---------- CTA BANNER SECTION BEGIN ---------- --> */}
                <section className={`cta-banner-section`}>
                    <Row>
                        <Col xl={12}>
                            <div className={`text-center ${style.callToAction}`}>
                                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <Button className={`${style.btnRentNow}`} onClick={() => navigate("/search")}>Mulai Sewa Mobil</Button>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* <!-- ---------- CTA BANNER SECTION END ---------- --> */}

                {/* <!-- ---------- FAQ SECTION BEGIN ---------- --> */}
                <section className={`${style.faqSection}`} id="faq-section">
                    <Row>
                        {/* <!-- Text Opening --> */}
                        <Col lg={6} md={6} sm={12}>
                            <div className={`${style.faqIntro}`}>
                                <h2>Frequently Asked Question</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </Col>
                        {/* <!-- Questions List --> */}
                        <Col lg={6} md={6} sm={12}>
                            <div className={`${style.listQuestions}`}>
                                <div className={`accordion accordion-flush`} id="accordionFlushExample">

                                    <div className={`${style.accordionBox}`}>
                                        <div className={`accordion-item`}>
                                            <h2 className={`accordion-header`} id="flush-headingOne">
                                                <Button className={`accordion-button collapsed ${style.accordionBtn} ${style.accordionBtn}`} type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Apa saja syarat yang dibutuhkan?
                                                </Button>
                                            </h2>
                                            <div id="flush-collapseOne" className={`accordion-collapse collapse`}
                                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className={`accordion-body`}>Lorem ipsum dolor sit amet consectetur, adipisicing
                                                    elit. Perspiciatis dicta, aspernatur eum quas magnam quisquam facilis
                                                    quibusdam
                                                    molestiae adipisci amet voluptatibus dolore velit consequatur a nobis,
                                                    tempora
                                                    cumque qui vero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Obcaecati nostrum eius corrupti, modi voluptates dolorum odio blanditiis
                                                    dicta
                                                    numquam, architecto ut beatae eos? Fugit quasi, consequatur itaque voluptas
                                                    autem ipsum.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${style.accordionBox}`}>
                                        <div className={`accordion-item`}>
                                            <h2 className={`accordion-header`} id="flush-headingTwo">
                                                <Button className={`accordion-button collapsed ${style.accordionBtn}`} type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Berapa hari minimal sewa mobil lepas kunci?
                                                </Button>
                                            </h2>
                                            <div id="flush-collapseTwo" className={`accordion-collapse collapse`}
                                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className={`accordion-body`}>Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Vel alias obcaecati aut voluptatum explicabo numquam dolorum dolores
                                                    laudantium
                                                    dolorem! Vitae debitis nobis molestiae minus adipisci quo iste in eum aut?
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${style.accordionBox}`}>
                                        <div className={`accordion-item`}>
                                            <h2 className={`accordion-header`} id="flush-headingThree">
                                                <Button className={`accordion-button collapsed ${style.accordionBtn}`} type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                                </Button>
                                            </h2>
                                            <div id="flush-collapseThree" className={`accordion-collapse collapse`}
                                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className={`accordion-body`}>Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Modi dolore, asperiores beatae dolores consequatur possimus facere? Modi quo
                                                    cupiditate quidem amet itaque nihil. Vero fugiat reprehenderit, odit
                                                    excepturi
                                                    sint amet.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${style.accordionBox}`}>
                                        <div className={`accordion-item`}>
                                            <h2 className={`accordion-header`} id="flush-headingFour">
                                                <Button className={`accordion-button collapsed ${style.accordionBtn}`} type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                                    aria-expanded="false" aria-controls="flush-collapseFour">
                                                    Apakah Ada biaya antar-jemput?
                                                </Button>
                                            </h2>
                                            <div id="flush-collapseFour" className={`accordion-collapse collapse`}
                                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className={`accordion-body`}>Lorem ipsum dolor sit, amet consectetur adipisicing
                                                    elit. Modi voluptatum reiciendis in, nisi saepe, velit veritatis dolorum qui
                                                    numquam eius tenetur rerum. Velit qui accusantium numquam itaque fuga. Quas,
                                                    beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                                                    maiores
                                                    temporibus aperiam! Illum quod fugit, ipsum commodi assumenda dolorem est
                                                    eligendi, natus eveniet nisi soluta amet? Facilis quos ullam fuga. Lorem
                                                    ipsum
                                                    dolor sit amet consectetur, adipisicing elit. Earum nam, perspiciatis
                                                    aperiam
                                                    facere rem omnis non, nulla placeat veritatis quod totam nihil ut sit est.
                                                    Possimus, cupiditate adipisci. Nobis, cupiditate!</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${style.accordionBox}`}>
                                        <div className={`accordion-item`}>
                                            <h2 className={`accordion-header`} id="flush-headingFive">
                                                <Button className={`accordion-button collapsed ${style.accordionBtn}`} type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                                    aria-expanded="false" aria-controls="flush-collapseFive">
                                                    Bagaimana jika terjadi kecelakaan?
                                                </Button>
                                            </h2>
                                            <div id="flush-collapseFive" className={`accordion-collapse collapse`}
                                                aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                <div className={`accordion-body`}>Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Quae delectus blanditiis explicabo est recusandae. Repellendus perspiciatis
                                                    sunt
                                                    blanditiis ab perferendis asperiores beatae rem nostrum magnam molestiae,
                                                    dignissimos possimus, cupiditate quisquam.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* <!-- ---------- FAQ SECTION END ---------- --> */}
            </Container>
            
            <Footer />
        
        </React.Fragment>
    );
}


export const dataX = {
    labels: ['Avanza', 'Xenia', 'Fortuner', 'Pajero', 'Corolla', 'Rush'],
    datasets: [
      {
        label: '# of Votes',
        data: [112, 39, 300, 51, 14, 48],
        backgroundColor: [
          '#42a832',
          '#ffff00',
          '#ff00b7',
          '#b700ff',
          '#ff8c00',
          '#ff4000',
        ],
        borderColor: [
          '#0D28A6',
          '#0D28A6',
          '#0D28A6',
          '#0D28A6',
          '#0D28A6',
        ],
        borderWidth: 1,
      },
    ],
  };

export default Home;
