import React from 'react'
import './Oculus.scss'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

const Oculus = () => {
      return (
            <div className='o-body'>                  
                  <div className='oculus-c'>
                        <div className='first-sec'>
                              <div className='oculus-imgs-box'>
                                    <div className='img-box'>
                                          <div className='hvr left-bigimg'>
                                                <img src='occo.png'></img>
                                                <h3>Virtual eynək</h3>
                                          </div>
                                          <div className='right-miniimg'>
                                                <div className='hvr mini-box'>
                                                      <img src='charge.jpg'></img>
                                                      <span>Power adapter</span>
                                                </div>
                                                <div id='bnone' className='hvr mini-box'>
                                                      <img src='twotouch.jpg'></img>
                                                      <span>iki touch controller</span>
                                                </div>
                                                <div className='hvr mini-box'>
                                                      <img src='plastik.jpg'></img>
                                                      <span>Plastik</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='oculus-buy-box'>
                                    <div className='buy-box'>
                                          <button>
                                                <span>İndi al</span>
                                                <span>830 AZN</span>
                                          </button>
                                          <div className='p-info'>
                                                <div className='desc-textbox'>
                                                      <p>Qutu daxilində virtual eynək,
                                                         2 ədəd idarəetmə kontrolleri,
                                                         type-c girişli adapter, və
                                                         eynək taxanlar üçün gözlük
                                                         spacer daxildir.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='cooltext-sec'>
                              <h1>OCULUS QUEST 2 İLƏ</h1>
                              <h3>NƏLƏR ETMƏK OLAR?</h3>
                        </div>
                        <div className='grey-section'>
                              <div className='grey-text'>
                                    <p>Çoxlu sayda qorxulu, əyləncəli və <br/> aksion dolu 
                                          oyunlar oynamaq imkanı
                                    </p>
                              </div>
                              <div className='grey-img-c'>
                                    <img src='gamer1.jpg'></img>
                              </div>
                        </div>
                        <div className='grey-section'>
                              <div className='grey-img-c'>
                                    <img src='gamer2.jpg'></img>
                              </div>
                              <div className='grey-text'>
                                    <p>
                                          Müxtəlif 3D dizaynlar etmək, NFT-ləri
                                          sərgiləmək, tikilməsi planlanan evləri,
                                          binaları və başqa lahiyələri əvvəlcədən
                                          virtual şəkildə müştərilərə təqdim etmək 
                                          mümkündür.
                                    </p>
                              </div>
                        </div>
                        <div className='grey-section'>
                              <div className='grey-text'>
                                    <p>
                                          Metaverse'ə qoşulub dünyanın müxtəlif
                                          ölkələrində yaşayan insanlarla söhbət
                                          etmək, dost olmaq, xarici dil bacarığını
                                          artırmaq, bununla yanaşə Metaverse-də
                                          ərazi almaq, pul qazanmaq, müxtəlif parti
                                          və təqdimatlara qatılmaq mümkündür.

                                    </p>
                              </div>
                              <div className='grey-img-c'>
                                    <img src='gamer3.jpg'></img>
                              </div>
                        </div>
                        <div className='grey-section'>
                              <div className='grey-img-c'>
                                    <img src='gamer4.jpg'></img>
                              </div>
                              <div className='grey-text'>
                                    <p>
                                          Müxtəlif idman, fitnes, boks proqramları ilə 
                                          bədən inkişafı və sağlam yaşam imkanı
                                    </p>
                              </div>
                        </div>
                  </div>
                  
            </div>


      )
}

export default Oculus