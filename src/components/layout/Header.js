import React, { useEffect, useState } from "react";
import { LocalRoutes } from '../../config'

export const Header = () => {
  const [anchors, setAnchors] = useState ({
    academia: null,
    stories: null
  })

  useEffect(() => {
    const academiaAnchor = document.getElementById(LocalRoutes.academiaId);
    const storiesAnchor = document.getElementById(LocalRoutes.storiesId);
    setAnchors({
      academia: academiaAnchor,
      stories: storiesAnchor
    })
  }, [])

  return (
    <header>
      <a
        href={LocalRoutes.homeAcademia}
        onClick={() => anchors.academia.scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: "smooth",
            alignToTop: false
          })
        }
      >
        Academia
      </a>
      <a
        href={LocalRoutes.homeStories}
        onClick={() => anchors.stories.scrollIntoView({
            block: "nearest",
            inline: "center",
            behavior: "smooth",
            alignToTop: false
          })
        }
      >
        Stories
      </a>
    </header>
  );
}
