export const TopHeader = () => {
  return (
    <div className="flex justify-between bg-secondary pl-5 pr-10 mb-5 py-3	">
      <div className="flex gap-8">
        <div className="flex gap-1 items-center	">
          <i className="fa-solid fa-phone text-primary "></i>
          <a href="tel:+549-1165269434" className="text-primary">
            +549-1165269434
          </a>
        </div>
        <div className="flex gap-1 items-center	">
          <i className="fa-solid fa-envelope text-primary"></i>
          <a href="mailto:info@vetly.com.ar" className="text-primary">
            info@vetly.com.ar
          </a>
        </div>
      </div>
      <div className="flex gap-8 ">
        <a href="#" className="text-primary">
          Theme FAQ'S
        </a>
        <a href="#" className="text-primary">
          Need Help
        </a>
      </div>
    </div>
  );
};
