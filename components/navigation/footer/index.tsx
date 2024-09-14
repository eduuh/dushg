
const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto min-h-[15vh] md:min-h-fit flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2">
        <div></div>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
