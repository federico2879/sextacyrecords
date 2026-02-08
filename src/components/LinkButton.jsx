export default function LinkButton({ href, iconSrc, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="linkBtn">
      <span className="linkBtnLeft">
        <span className="linkBtnIcon">
          <img src={iconSrc} alt="" />
        </span>
        <span className="linkBtnText">{children}</span>
      </span>

      <span className="linkBtnArrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
