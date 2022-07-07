<?php

namespace App\Repositories\Image;

use App\Models\Image;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class CreateImgRepository implements ImageRepository
{
    /**
     * @param UploadedFile $img
     * @return void
     */
    public function createImg(UploadedFile $img): void
    {
        $path = Storage::disk('s3')->put('perspective', $img);
        Image::create([
            'url' => $path
        ]);
    }

}
