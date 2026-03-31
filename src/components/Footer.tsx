const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border/60 py-8">
      <div className="container max-w-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-[10px]">R</span>
            </div>
            <span className="font-display font-semibold text-sm text-foreground">Rewordly</span>
          </div>

          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Rewordly
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
