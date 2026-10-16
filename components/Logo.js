/** FlashX "F" mark: white blade and speed shard over a lime stem and bar. */
export function Mark({ size = 32, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="230 230 600 580"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="440,250 808,250 738,375 388,375" fill="#FFFFFF" />
      <polygon points="333,322 405,322 357,393 287,393" fill="#FFFFFF" />
      <polygon points="388,375 505,375 478,458 702,458 642,565 442,565 370,785 250,785" fill="#C6F432" />
    </svg>
  );
}

/** Mark plus the "FlashX" wordmark (white italic "Flash", lime "X"). */
export default function Logo({ size = 30 }) {
  return (
    <span className="logo">
      <Mark size={size} />
      <span className="wordmark">
        Flash<span className="wordmark-x">X</span>
      </span>
    </span>
  );
}
