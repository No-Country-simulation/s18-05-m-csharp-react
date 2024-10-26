import { forwardRef, InputHTMLAttributes, useState } from "react";

interface ImageUploadProps extends InputHTMLAttributes<HTMLInputElement> {
}

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  (props, ref) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
      }
      props.onChange && props.onChange(event);
    };

    return (
      <label
        className={`w-full h-48 ${previewUrl ? 'hover:h-80' : ''}
        transition-all ease duration-300 border-2 border-primary-light-500 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden bg-white mt-[-96px] mb-5`}
      >
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col text-center text-light-gray">
            + <span>Cargar foto*</span>
          </div>
        )}
        <input
          {...props}
          type="file"
          ref={ref}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
