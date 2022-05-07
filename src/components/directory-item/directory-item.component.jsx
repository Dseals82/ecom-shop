import {BackgroundImage, Body, DirectoryContainer} from  './directory-item.styles.jsx';

const DirectoryItem = ({ title, imageUrl}) => (
    <DirectoryContainer >
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </Body>
    </DirectoryContainer>
);

export default DirectoryItem;
