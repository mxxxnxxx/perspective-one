<?php

namespace App\Repositories\Image;

use Illuminate\Http\UploadedFile;

interface ImageRepository
{
    public function createImg(UploadedFile $img): void;
}
