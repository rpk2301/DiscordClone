"use client";

interface FileUploadProps{

    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}

export const FileUpload = ({
    endpoint,
    value,
    onChange
    }: FileUploadProps) => {
    return (
        <div>
            File Upload Component
        </div>
    )
}