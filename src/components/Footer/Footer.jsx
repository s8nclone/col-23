import React from 'react'
import Logo from '../Logo'
import styles from "./Footer.module.css"
import { 
    FaInstagramSquare, 
    FaFacebookSquare, 
    FaLinkedin, 
    FaTwitterSquare
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-hero-pattern text-[#F9F5FF] bg-top bg-cover bg-no-repeat ">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-0 justify-between py-24 sm:px-32 ">
            <div className="flex flex-col gap-4 mx-4 w-2/5 sm:w-1/6">
                <Logo className="flex flex-col text-3xl font-medium items-center self-start gap-2 " />

                <div className="flex flex-col gap-2 mt-4 ">
                    <h2 className="text-xl font-medium ">Follow our socials</h2>
                    <div className="flex items-center gap-4  ">
                        <FaInstagramSquare className={styles.socialIcons} />
                        <FaLinkedin className={styles.socialIcons} />
                        <FaFacebookSquare className={styles.socialIcons} />
                        <FaTwitterSquare className={styles.socialIcons} />
                    </div>
                    
                </div>
                
            </div>

            <div className="flex flex-wrap mx-4 sm:mx-0 justify-between gap-12 sm:gap-28">
                <div className={`${styles.footerLinks} w-2/5 sm:w-1/6 `}>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">What we offer</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Leadership</a></li>
                        <li><a href="#">Professional Certificate</a></li>
                    </ul>
                </div>

                <div className={`${styles.footerLinks} w-2/5 sm:w-1/6 `}>
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Help and FAQs</a></li>
                        <li><a href="#">Service status</a></li>
                        <li><a href="#">Tech Requirements</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>

                <div className={`${styles.footerLinks} w-2/5 sm:w-1/6 `}>
                    <h3>Community</h3>
                    <ul>
                        <li><a href="#">Learners</a></li>
                        <li><a href="#">Tech Blog</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Become a Tutor</a></li>
                    </ul>
                </div>
                
                <div className={`${styles.footerLinks} w-2/5 sm:w-1/6 `}>
                    <h3>More</h3>
                    <ul>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Articles</a></li>
                    </ul>
                </div>
            </div>
        </div>

        
        <div className={styles.legalLinks}>
            <ul>
                <li>Col-23, Inc. 2023</li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Sitemaps</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer