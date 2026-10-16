import Icon from "./Icon";

/** Store listings that are not live yet. Not links: nothing to open. */
export default function StoreBadges() {
  return (
    <div className="store-badges" aria-label="Other ways to get FlashX">
      <span className="store-badge" aria-disabled="true">
        <Icon name="play" size={22} />
        <span className="store-badge-text">
          <span className="store-badge-small">Coming soon to</span>
          <span className="store-badge-name">Google Play</span>
        </span>
      </span>
      <span className="store-badge" aria-disabled="true">
        <Icon name="apps" size={22} />
        <span className="store-badge-text">
          <span className="store-badge-small">Coming soon to the</span>
          <span className="store-badge-name">App Store</span>
        </span>
      </span>
    </div>
  );
}
