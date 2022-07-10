<?php

namespace App\Repositories\Image;

use App\Models\Image;
use Illuminate\Http\UploadedFile;

class TestCreateImgRepository implements ImageRepositoryInterface
{

    public function createImg(UploadedFile $img): void
    {
        $path = public_path('uploadedFile');
        $fileName = $img->getClientOriginalName();
        $img->move($path, $fileName);
        Image::create([
            'url' => $path
        ]);
    }
}
