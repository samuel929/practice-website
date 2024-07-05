import FooterLink from "./FooterLinks";
import NewsLetter from "./NewsLetter";
import TermsAndCondition from "./TermsAndCondition";

function Footer() {
  return (
    <div className='bg-customGray py-[60px] block px-8 '>
      <FooterLink />
      <NewsLetter />
      <TermsAndCondition />
    </div>
  );
}

export default Footer;
