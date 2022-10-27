import React, { FC } from 'react';
import styles from "./UserLink.module.scss"


interface UserLinkProps {
    linkCaption: string
}

const UserLink: FC<UserLinkProps> = ({ linkCaption }) => {
    return <a className={styles.linkDiscover} href="#"> { linkCaption }</a>
};

export default UserLink;