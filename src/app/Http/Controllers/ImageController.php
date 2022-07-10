<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use App\Repositories\Image\CreateImgRepository;
use App\Repositories\Image\ImageRepositoryInterface;
use App\Services\Image\ControlImageService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class ImageController extends Controller
{
    /**
     * 写真をハンドリングして保存
     *
     * @param ControlImageService $controlImageService
     * @param CreateImgRepository $imageRepository
     * @param ImageRequest $request バリデーションはこちらで実装
     * @return Response|Application|ResponseFactory
     */

    public function store
    (
        ControlImageService      $controlImageService,
        ImageRepositoryInterface $imageRepository,
        ImageRequest             $request
    ): Response|Application|ResponseFactory
    {
        $img = $controlImageService->controlImage($request);
        if ($img) {
            $imageRepository->createImg($img);
            return response([], 200);
        }
        return response([], 500);
    }

}
