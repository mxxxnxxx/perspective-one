<?php

namespace App\Services\Image;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

/**
 * ImageServiceのインターフェイス   uploadedFile
 *
 */
interface ImageServiceInterface
{
    public function controlImage(Request $request): UploadedFile|null;
}
