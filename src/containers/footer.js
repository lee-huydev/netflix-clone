import React from 'react';
import { Footer } from '../components';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
const FooterContainer = ({ showIcon = false, ...restProps }) => {
   return (
      <Footer {...restProps}>
         <Footer.Title>
            {showIcon ? (
               <Footer.GrIcons>
                  <GrFacebookOption />
                  <AiOutlineInstagram />
                  <BsTwitter />
                  <FaYoutube />
               </Footer.GrIcons>
            ) : (
               'Questions? Contact us.'
            )}
         </Footer.Title>
         <Footer.Break />
         <Footer.Row>
            <Footer.Column>
               <Footer.Link href="#">FAQ</Footer.Link>
               <Footer.Link href="#">Investor Relations</Footer.Link>
               <Footer.Link href="#">Privacy</Footer.Link>
               <Footer.Link href="#">Speed Test</Footer.Link>
            </Footer.Column>

            <Footer.Column>
               <Footer.Link href="#">Help Centre</Footer.Link>
               <Footer.Link href="#">Jobs</Footer.Link>
               <Footer.Link href="#">Cookie Preferences</Footer.Link>
               <Footer.Link href="#">Legal Notices</Footer.Link>
            </Footer.Column>

            <Footer.Column>
               <Footer.Link href="#">Account</Footer.Link>
               <Footer.Link href="#">Ways to Watch</Footer.Link>
               <Footer.Link href="#">Corporate Information</Footer.Link>
               <Footer.Link href="#">Only on Netflix</Footer.Link>
            </Footer.Column>

            <Footer.Column>
               <Footer.Link href="#">Media Centre</Footer.Link>
               <Footer.Link href="#">Terms of Use</Footer.Link>
               <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.Column>
         </Footer.Row>
         <Footer.Break />
         <Footer.Text>Netflix Vietnam</Footer.Text>
      </Footer>
   );
};

export default FooterContainer;
