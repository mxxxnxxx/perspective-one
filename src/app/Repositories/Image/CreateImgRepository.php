<?php

namespace App\Repositories\Image;

use App\Models\Image;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;


class CreateImgRepository implements ImageRepositoryInterface
{
    /**
     * Image repository constructor
     *
     * @param UploadedFile $img
     * @return void
     */

    public function createImg(UploadedFile $img): void
    {
        Debugbar::info('でちゃだめ');
        $path = Storage::disk('s3')->put('perspective', $img);
        Image::create([
            'url' => $path
        ]);
    }

}
