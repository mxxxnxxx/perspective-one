<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use App\Repositories\Image\CreateImgRepository;
use App\Services\Image\ControlImageService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

class ImageController extends Controller
{
    /**
     * @param ControlImageService $createImgService
     * @param CreateImgRepository $createImgRepository
     * @param ImageRequest $request バリデーションはこちらで実装
     * @return Response|Application|ResponseFactory
     */

    public function store
    (
        ControlImageService $createImgService,
        CreateImgRepository $createImgRepository,
        ImageRequest        $request
    ): Response|Application|ResponseFactory
    {
        $img = $createImgService->controlImage($request);
        if ($img) {
            $createImgRepository->createImg($img);
            return response([], 200);
        }
        return response([], 500);
    }


}
