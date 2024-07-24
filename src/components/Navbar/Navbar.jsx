import React from "react";

function Navbar({ content }) {
  return (
    <nav>
      <nav>
        <div class="header_links">
          <ul>
            {content.linksContent?.map((links, index) => (
              <li key={index} className="links_options">
                <a href={links.href}>{links.text}</a>
              </li>
            ))}
          </ul>
          <form className="log-in">
            <button className="log-in_button">Log In</button>
          </form>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
