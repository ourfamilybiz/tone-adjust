const Footer = () => {
  return (
    <footer id="contact" className="bg-surface border-t border-border py-10">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">R</span>
            </div>
            <span className="font-display font-semibold text-foreground">Rewordly</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rewordly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
