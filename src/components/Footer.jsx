import logo from '../assets/Logo.png';
import GitHUB from '../assets/GitHUBB.png';
import linkedIn from '../assets/LinkedIn.png';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-8 bg-background mt-auto">
      <div className="mt-1 mb-1">
        <img
          src={logo}
          alt="Pawbnb"
          className="w-40 h-15 h-auto object-contain"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <p>About • </p>
        <p>FAQ • </p>
        <p>Contact</p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-sm">Terms • Privacy</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <a
            href="https://www.linkedin.com/in/dovydas-majauskas-a98946259"
            target="_blank"
            rel="noopener noreferrer"
            className="GitHUB-icon"
          >
            <img
              src={linkedIn}
              alt="linkedIn"
              className="w-10 h-10 h-auto object-contai"
            />
          </a>

          <a
            href="https://www.github.com/Dovymay"
            target="_blank"
            rel="noopener noreferrer"
            className="GitHUB-icon"
          >
            <img
              src={GitHUB}
              alt="Github"
              className="w-10 h-10 h-auto rounded-md object-contain "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
