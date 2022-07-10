<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ImageStoreTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testStoreImage(): void
    {
        Storage::fake('s3');
        $fakeImage = UploadedFile::fake()->image('test.png');
        $response = $this->post(
            route('image.store'),
            [['img' => $fakeImage]]
        );

        $response->assertStatus(200);
    }
}
