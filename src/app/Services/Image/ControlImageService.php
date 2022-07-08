<?php

namespace App\Services\Image;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class ControlImageService implements ImageServiceInterface
{

    /**
     * $requestから受け取った写真をのハンドリング
     *
     * ビジネスロジックとして抽出
     *
     * @param Request $request
     * @return UploadedFile|null
     */

    public function controlImage(Request $request): UploadedFile|null
    {
        if ($request->file('img')) {
    
            return $request->file('img');
        }
        return null;
    }
}
