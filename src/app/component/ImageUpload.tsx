import React from 'react'
import { LooseObject } from '../types/GlobalType';

/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { Button,  } from '@wordpress/components';

import { MediaUpload, MediaPlaceholder, BlockIcon} from '@wordpress/block-editor';


type ImageUploadProps = {
    attributes: LooseObject,
    setAttributes : Function,
}

const ImageUpload = ({attributes, setAttributes}: ImageUploadProps) => {
    const { images } = attributes;
    const hasImages = images.id !== undefined;
    
    return (
        <>
            {hasImages && (
                <MediaUpload
                    allowedTypes={['image']}
                    multiple={false}
                    value={attributes.images ? attributes.images.id : ''}
                    onSelect={(newImages) => setAttributes({ images: newImages })}
                    render={({ open }) => (
                        <div className="image">
                            <figure>
                                <img src={attributes.images.url} alt={attributes.images.alt} />
                            </figure>
                            <div>
                                <Button onClick={() => setAttributes({ images: '' })} className="button">Remove</Button>
                            </div>
                        </div>
                    )}
                />
            )}
            {!hasImages && (
                <MediaPlaceholder
                    icon={<BlockIcon icon="format-gallery" />}
                    labels={{
                        title: "Placeholder Title",
                        instructions: "Add a most excellent image.",
                    }}
                    onHTMLDrop={()=>{}}
                    onSelect={(newImages) => setAttributes({ images: newImages })}
                />
            )}
        </>
    )
}

export default ImageUpload