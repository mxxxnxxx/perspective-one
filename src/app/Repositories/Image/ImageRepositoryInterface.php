<?php

namespace App\Repositories\Image;

use Illuminate\Http\UploadedFile;

/**
 * インターフェイス   uploadedFile $img
 */
interface ImageRepositoryInterface
{
    public function createImg(UploadedFile $img): void;
}
