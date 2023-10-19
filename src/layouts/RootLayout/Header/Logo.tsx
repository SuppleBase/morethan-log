import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
       <div className="name">{CONFIG.profile.name}</div>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
> .name {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-style: italic;
  font-weight: 700;
}
`