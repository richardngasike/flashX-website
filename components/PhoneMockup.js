import Icon from "./Icon";
import { Mark } from "./Logo";

const stories = [
  { name: "You", hue: "a" },
  { name: "Amani", hue: "b" },
  { name: "Wanjiru", hue: "c" },
  { name: "Kibet", hue: "d" },
];

/** An illustration of the FlashX home feed (drawn in CSS, not a screenshot). */
export default function PhoneMockup() {
  return (
    <div className="phone-wrap" aria-hidden="true">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span className="phone-status-icons">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="phone-top">
            <span className="phone-brand">
              <Mark size={18} />
              <b>
                Flash<em>X</em>
              </b>
            </span>
            <span className="phone-top-icons">
              <Icon name="live" size={16} />
              <Icon name="chat" size={16} />
            </span>
          </div>

          <div className="phone-stories">
            {stories.map((s) => (
              <span key={s.name} className="phone-story">
                <span className={`phone-story-ring ring-${s.hue}`}>
                  <span className="phone-story-face">{s.name[0]}</span>
                </span>
                <span className="phone-story-name">{s.name}</span>
              </span>
            ))}
          </div>

          <div className="phone-post">
            <div className="phone-post-head">
              <span className="phone-avatar">A</span>
              <span className="phone-post-user">
                <b>amani.k</b>
                <svg className="phone-verified" viewBox="0 0 24 24" width="12" height="12">
                  <path
                    fill="#C6F432"
                    d="M12 2.8l2.4 1.7 2.9-.2.9 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-.9 2.8-2.9-.2L12 21.2l-2.4-1.7-2.9.2-.9-2.8-2.4-1.7.9-2.8-.9-2.8 2.4-1.7.9-2.8 2.9.2z"
                  />
                  <path fill="none" stroke="#0A0D10" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="m8.4 12.2 2.4 2.4 4.8-5" />
                </svg>
                <small>Nairobi</small>
              </span>
            </div>
            <div className="phone-media">
              <span className="phone-sun" />
              <span className="phone-hill phone-hill-back" />
              <span className="phone-hill phone-hill-front" />
              <span className="phone-reel-tag">
                <Icon name="play" size={10} strokeWidth={2.4} /> Reel
              </span>
            </div>
            <div className="phone-actions">
              <span className="phone-heart" />
              <span className="phone-action-dot" />
              <span className="phone-action-dot" />
              <span className="phone-likes">2,481 likes</span>
            </div>
            <div className="phone-caption">
              <span className="line w80" />
              <span className="line w55" />
            </div>
          </div>

          <div className="phone-nav">
            <span className="on" />
            <span />
            <span className="phone-nav-add">+</span>
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="float-chip chip-live">
        <span className="live-dot" /> LIVE
        <small>1.2k watching</small>
      </div>
      <div className="float-chip chip-gift">
        <Icon name="gift" size={16} />
        <span>
          Achieng sent a gift
          <small>+50 coins</small>
        </span>
      </div>
    </div>
  );
}
